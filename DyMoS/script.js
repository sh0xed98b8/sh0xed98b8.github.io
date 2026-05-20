(function () {
  var diagBox = null;
  function diag(msg) {
    if (!diagBox) {
      diagBox = document.createElement('div');
      diagBox.id = '__diag';
      diagBox.style.cssText = 'position:fixed;left:8px;bottom:8px;max-width:480px;font:12px ui-monospace,monospace;background:#fee;color:#900;border:1px solid #faa;border-radius:6px;padding:8px;z-index:9999;line-height:1.4';
      var close = document.createElement('button');
      close.textContent = 'x';
      close.style.cssText = 'float:right;border:none;background:transparent;cursor:pointer;color:#900;font:14px monospace';
      close.onclick = function () { diagBox.style.display = 'none'; };
      diagBox.appendChild(close);
      document.body.appendChild(diagBox);
    }
    var line = document.createElement('div');
    line.textContent = msg;
    diagBox.appendChild(line);
  }

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (k === 'class') n.className = attrs[k];
        else if (attrs[k] === true) n.setAttribute(k, '');
        else if (attrs[k] !== false && attrs[k] != null) n.setAttribute(k, attrs[k]);
      }
    }
    if (children != null) {
      if (!Array.isArray(children)) children = [children];
      children.forEach(function (c) {
        if (c == null || c === false) return;
        if (typeof c === 'string' || typeof c === 'number') n.appendChild(document.createTextNode(c));
        else n.appendChild(c);
      });
    }
    return n;
  }

  function makeVideo(src, opts) {
    opts = opts || {};
    var v = document.createElement('video');
    v.muted = true;
    v.defaultMuted = true;
    v.loop = true;
    v.playsInline = true;
    v.preload = opts.preload || 'metadata';
    if (opts.autoplay !== false) v.autoplay = true;
    v.setAttribute('muted', '');
    v.setAttribute('loop', '');
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    if (opts.autoplay !== false) v.setAttribute('autoplay', '');
    v.src = src;
    v.addEventListener('error', function () { diag('video error: ' + src); }, { once: true });
    return v;
  }

  var syncGroups = {};
  var syncGroupSeq = 0;
  function makeSyncGroup() {
    var id = '__sg' + (++syncGroupSeq);
    syncGroups[id] = { videos: [], intersectingCount: 0, started: false };
    return id;
  }
  function addToSyncGroup(id, v) {
    var g = syncGroups[id];
    if (!g) return;
    g.videos.push(v);
    v.dataset.syncGroup = id;
    var onReady = function () {
      v.removeEventListener('canplay', onReady);
      tryPlaySyncGroup(g);
    };
    if (v.readyState >= 3) tryPlaySyncGroup(g);
    else v.addEventListener('canplay', onReady);
  }
  function tryPlaySyncGroup(g) {
    if (g.started || g.intersectingCount === 0) return;
    if (!g.videos.every(function (v) { return v.readyState >= 3; })) return;
    g.started = true;
    g.videos.forEach(function (v) {
      try { v.currentTime = 0; } catch (_) {}
      var p = v.play();
      if (p && typeof p.catch === 'function') p.catch(function () {});
    });
  }
  function pauseSyncGroup(g) {
    g.started = false;
    g.videos.forEach(function (v) {
      if (!v.paused) v.pause();
    });
  }

  function metaBadges(parts) {
    var children = parts.filter(Boolean).map(function (p) {
      return el('span', { class: 'badge' }, p);
    });
    return el('div', { class: 'meta-badges' }, children);
  }

  var io = null;
  function initObserver() {
    if (!('IntersectionObserver' in window)) return null;
    io = new IntersectionObserver(function (entries) {
      var touched = {};
      entries.forEach(function (e) {
        var v = e.target;
        var gid = v.dataset.syncGroup;
        if (gid) {
          var g = syncGroups[gid];
          if (!g) return;
          if (e.isIntersecting && !v.__inSync) {
            v.__inSync = true;
            g.intersectingCount++;
          } else if (!e.isIntersecting && v.__inSync) {
            v.__inSync = false;
            g.intersectingCount--;
          }
          touched[gid] = g;
        } else {
          if (e.isIntersecting) {
            if (v.paused) {
              var p = v.play();
              if (p && typeof p.catch === 'function') p.catch(function () {});
            }
          } else {
            if (!v.paused) v.pause();
          }
        }
      });
      Object.keys(touched).forEach(function (gid) {
        var g = touched[gid];
        if (g.intersectingCount > 0) tryPlaySyncGroup(g);
        else pauseSyncGroup(g);
      });
    }, { rootMargin: '200px 0px', threshold: 0.05 });
  }
  function observeAllVideos(root) {
    if (!io) return;
    root.querySelectorAll('video').forEach(function (v) { io.observe(v); });
  }

  function renderTeaser(container, t) {
    if (!t) return;
    var wrap = el('div', { class: 'teaser-grid' });

    var aPanel = el('div', { class: 'teaser-panel teaser-a' });
    var aBody = el('div', { class: 'teaser-a-body' });
    (t.dynamic || []).forEach(function (item) {
      var block = el('div', { class: 'teaser-dyn-block' });
      var rows = el('div', { class: 'teaser-dyn-rows' });
      var aGroupId = makeSyncGroup();
      var vBase = makeVideo(item.files.baseline, { autoplay: false, preload: 'auto' });
      addToSyncGroup(aGroupId, vBase);
      rows.appendChild(el('div', { class: 'teaser-row' }, [
        el('div', { class: 'row-label row-label-vertical' },
           el('span', null, item.model)),
        el('div', { class: 'video-cell' }, [vBase]),
      ]));
      var vOurs = makeVideo(item.files.ours, { autoplay: false, preload: 'auto' });
      addToSyncGroup(aGroupId, vOurs);
      rows.appendChild(el('div', { class: 'teaser-row' }, [
        el('div', { class: 'row-label row-label-vertical row-label-ours' },
           el('span', null, 'Ours')),
        el('div', { class: 'video-cell' }, [vOurs]),
      ]));
      block.appendChild(rows);
      block.appendChild(el('div', { class: 'teaser-prompt' }, item.prompt));
      aBody.appendChild(block);
    });
    aPanel.appendChild(aBody);
    aPanel.appendChild(el('div', { class: 'panel-caption' }, '(a) Dynamic image-to-video generation'));
    wrap.appendChild(aPanel);

    var c = t.continuous;
    var bPanel = el('div', { class: 'teaser-panel teaser-b' });
    if (c) {
      var bBody = el('div', { class: 'teaser-b-body' });
      var inner = el('div', { class: 'teaser-cont-inner' });

      var axis = el('div', { class: 'teaser-axis' }, [
        el('div', { class: 'axis-end axis-static' }, [
          el('div', { class: 'axis-arrow axis-arrow-up' }),
          el('div', { class: 'axis-text' }, el('span', null, 'Static')),
        ]),
        el('div', { class: 'axis-bar' }),
        el('div', { class: 'axis-end axis-dynamic' }, [
          el('div', { class: 'axis-text' }, el('span', null, 'Dynamic')),
          el('div', { class: 'axis-arrow axis-arrow-down' }),
        ]),
      ]);
      inner.appendChild(axis);

      var rows = el('div', { class: 'teaser-cont-rows' });
      var bGroupId = makeSyncGroup();
      (c.rows || []).forEach(function (r) {
        var v = makeVideo(r.file, { autoplay: false, preload: 'auto' });
        addToSyncGroup(bGroupId, v);
        rows.appendChild(el('div', { class: 'video-cell' }, [v]));
      });
      inner.appendChild(rows);
      bBody.appendChild(inner);
      bBody.appendChild(el('div', { class: 'teaser-prompt' }, c.prompt));
      bPanel.appendChild(bBody);
    }
    bPanel.appendChild(el('div', { class: 'panel-caption' }, '(b) Continuous control over motion dynamics'));
    wrap.appendChild(bPanel);

    container.appendChild(wrap);
  }

  function renderDynamic(container, items) {
    var groups = []; var seen = {};
    items.forEach(function (it) {
      if (!seen[it.figure]) { seen[it.figure] = { figure: it.figure, items: [] }; groups.push(seen[it.figure]); }
      seen[it.figure].items.push(it);
    });

    groups.forEach(function (g) {
      container.appendChild(el('h3', { class: 'group-title' }, g.figure));
      g.items.forEach(function (it) {
        var fig = el('figure', { class: 'method-compare' });
        var grid = el('div', { class: 'grid grid-3' });
        var groupId = makeSyncGroup();
        ['base', 'alg', 'ours'].forEach(function (k) {
          var label = k === 'base' ? 'Base' : k === 'alg' ? 'ALG' : 'Ours';
          var v = makeVideo(it.files[k], { autoplay: false, preload: 'auto' });
          addToSyncGroup(groupId, v);
          var col = el('div', { class: 'compare-col' }, [
            el('div', { class: 'video-cell' }, [v]),
            el('div', { class: 'cell-label' }, label),
          ]);
          grid.appendChild(col);
        });
        fig.appendChild(grid);

        var captionChildren = [];
        captionChildren.push(el('div', { class: 'cap-line cap-title' }, it.label));
        captionChildren.push(metaBadges([
          'Model: ' + it.model,
          'Dataset: ' + it.dataset + (it.vid ? ' ' + it.vid : ''),
        ]));
        if (it.prompt) {
          captionChildren.push(el('div', { class: 'cap-line cap-prompt' }, [
            el('span', { class: 'prompt-label' }, 'Prompt:'),
            ' ',
            el('span', { class: 'prompt-text' }, '“' + it.prompt + '”'),
          ]));
        }
        fig.appendChild(el('figcaption', null, captionChildren));
        container.appendChild(fig);
      });
    });
  }

  function renderContinuous(container, items) {
    var groups = []; var seen = {};
    items.forEach(function (it) {
      if (!seen[it.figure]) { seen[it.figure] = { figure: it.figure, items: [] }; groups.push(seen[it.figure]); }
      seen[it.figure].items.push(it);
    });
    groups.forEach(function (g) {
      container.appendChild(el('h3', { class: 'group-title' }, g.figure));
      g.items.forEach(function (it) { container.appendChild(buildSlider(it)); });
    });
  }

  function buildSlider(item) {
    var steps = item.steps;
    var n = steps.length;
    var defaultIdx = Math.floor((n - 1) / 2);
    var slider = el('div', { class: 'video-slider' });

    var stack = el('div', { class: 'video-stack' });
    var videos = [];
    steps.forEach(function (s, i) {
      var v = makeVideo(s.file, { preload: 'auto', autoplay: i === defaultIdx });
      v.dataset.videoIndex = String(i);
      if (i !== defaultIdx) v.classList.add('hidden');
      stack.appendChild(v);
      videos.push(v);
    });
    slider.appendChild(stack);

    var captionChildren = [];
    captionChildren.push(metaBadges([
      'Model: ' + item.model,
      'Dataset: ' + item.dataset,
    ]));
    if (item.prompt) {
      captionChildren.push(el('div', { class: 'cap-line cap-prompt' }, [
        el('span', { class: 'prompt-label' }, 'Prompt:'),
        ' ',
        el('span', { class: 'prompt-text' }, '“' + item.prompt + '”'),
      ]));
    }
    slider.appendChild(el('div', { class: 'slider-caption' }, captionChildren));

    var valueLabel = el('span', { class: 'value-label' }, steps[defaultIdx].label);
    slider.appendChild(el('div', { class: 'slider-header' }, [
      el('span', { class: 'param-name' }, 'Guidance setting'),
      valueLabel,
    ]));

    var input = el('input', {
      type: 'range', min: 0, max: n - 1, step: 1, value: defaultIdx,
      class: 'slider-input', 'aria-label': 'Guidance setting',
    });
    var tickRow = el('div', { class: 'tick-row' });
    steps.forEach(function (s, i) {
      var t = el('span', { class: 'tick' }, s.label);
      t.style.left = 'calc((' + i + ' / ' + (n - 1) + ') * (100% - var(--thumb-size)) + (var(--thumb-size) / 2))';
      tickRow.appendChild(t);
    });
    var trackWrap = el('div', { class: 'slider-track-wrapper' }, [input, tickRow]);
    slider.appendChild(el('div', { class: 'slider-row' }, [
      el('span', { class: 'end-label' }, 'Lower'),
      trackWrap,
      el('span', { class: 'end-label' }, 'Higher'),
    ]));

    var currentIdx = defaultIdx;
    input.addEventListener('input', function (e) {
      var newIdx = parseInt(e.target.value, 10);
      if (isNaN(newIdx) || newIdx === currentIdx) return;
      var cur = videos[currentIdx]; var next = videos[newIdx];
      if (!cur || !next) return;
      try { cur.pause(); cur.currentTime = 0; } catch (_) {}
      try { next.currentTime = 0; } catch (_) {}
      cur.classList.add('hidden');
      next.classList.remove('hidden');
      var p = next.play();
      if (p && typeof p.catch === 'function') p.catch(function () {});
      currentIdx = newIdx;
      valueLabel.textContent = steps[newIdx].label;
    });

    return slider;
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    if (!window.PAGE_DATA) {
      diag('PAGE_DATA missing — data.js failed to load.');
      return;
    }
    var data = window.PAGE_DATA;
    var teaserContainer = document.getElementById('teaser-container');
    var dyn = document.getElementById('dynamic-container');
    var cont = document.getElementById('continuous-container');
    if (teaserContainer && data.teaser) renderTeaser(teaserContainer, data.teaser);
    if (dyn) renderDynamic(dyn, data.dynamic || []);
    if (cont) renderContinuous(cont, data.continuous || []);

    initObserver();
    observeAllVideos(document);

    var n = document.querySelectorAll('video').length;
    if (n === 0) diag('No <video> elements rendered. Check data.js content.');
  });
})();
