<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sea Tycoon</title>
    <style>
        :root {
            --bg-main: #0b0f19;
            --bg-topbar: rgba(15, 23, 42, 0.95);
            --text-color: #f8fafc;
            --text-muted: #94a3b8;
            --accent-gradient: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%);
            --card-bg: linear-gradient(145deg, #1e293b, #0f172a);
            --border-color: #334155;
            --sidebar-bg: linear-gradient(180deg, #111827 0%, #0b0f19 100%);
            --bottom-nav-bg: #1e293b;
        }

        body.theme-gelap {
            --bg-main: #000000;
            --bg-topbar: rgba(10, 10, 10, 0.95);
            --text-color: #ffffff;
            --text-muted: #a1a1aa;
            --accent-gradient: linear-gradient(135deg, #27272a 0%, #09090b 100%);
            --card-bg: linear-gradient(145deg, #121212, #050505);
            --border-color: #27272a;
            --sidebar-bg: linear-gradient(180deg, #09090b 0%, #000000 100%);
            --bottom-nav-bg: #121212;
        }

        body.theme-galaxy {
            --bg-main: #13001e;
            --bg-topbar: rgba(26, 0, 43, 0.95);
            --text-color: #fae8ff;
            --text-muted: #d8b4fe;
            --accent-gradient: linear-gradient(135deg, #c084fc 0%, #7e22ce 100%);
            --card-bg: linear-gradient(145deg, #2e1065, #1e1b4b);
            --border-color: #581c87;
            --sidebar-bg: linear-gradient(180deg, #2e1065 0%, #13001e 100%);
            --bottom-nav-bg: #2e1065;
        }

        body.theme-biru {
            --bg-main: #02203c;
            --bg-topbar: rgba(3, 37, 65, 0.95);
            --text-color: #e0f2fe;
            --text-muted: #7dd3fc;
            --accent-gradient: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
            --card-bg: linear-gradient(145deg, #03346e, #02203c);
            --border-color: #0369a1;
            --sidebar-bg: linear-gradient(180deg, #032b52 0%, #02203c 100%);
            --bottom-nav-bg: #03346e;
        }

        body.theme-putih {
            --bg-main: #f1f5f9;
            --bg-topbar: rgba(255, 255, 255, 0.95);
            --text-color: #0f172a;
            --text-muted: #64748b;
            --accent-gradient: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%);
            --card-bg: linear-gradient(145deg, #ffffff, #e2e8f0);
            --border-color: #cbd5e1;
            --sidebar-bg: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%);
            --bottom-nav-bg: #ffffff;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        body {
            background-color: var(--bg-main);
            color: var(--text-color);
            height: 100vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            transition: background 0.3s ease, color 0.3s ease;
        }

        /* Top Bar */
        .top-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            background: var(--bg-topbar);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-color);
            width: 100%;
            height: 60px;
            flex-shrink: 0;
            z-index: 100;
        }
        .top-left { display: flex; align-items: center; gap: 15px; }
        .top-right { display: flex; align-items: center; gap: 10px; }
        .menu-btn { background: none; border: none; color: var(--text-color); font-size: 22px; cursor: pointer; }
        .app-title { font-size: 17px; font-weight: 700; letter-spacing: 0.5px; }

        .top-icon-btn {
            width: 40px; height: 40px; border-radius: 50%; background: var(--card-bg);
            border: 1px solid var(--border-color); color: var(--text-color); font-size: 15px; display: flex; align-items: center;
            justify-content: center; cursor: pointer; position: relative; transition: 0.2s;
        }
        .top-icon-btn:hover, .top-icon-btn:active { background: var(--accent-gradient); color: #0f172a; border-color: transparent; transform: scale(0.95); }
        .badge-dot {
            position: absolute; top: 4px; right: 4px; width: 9px; height: 9px;
            background: #ef4444; border-radius: 50%; border: 2px solid var(--bg-main); display: none;
        }

        /* Marquee Header Banner */
        .header-banner-container {
            width: 100%;
            background: var(--card-bg);
            border-bottom: 1px solid var(--border-color);
            padding: 10px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            flex-shrink: 0;
        }
        .marquee-wrapper {
            overflow: hidden;
            white-space: nowrap;
            flex: 1;
            position: relative;
        }
        .marquee-text {
            display: inline-block;
            font-size: 12px;
            font-weight: 600;
            color: #38bdf8;
            animation: marquee 16s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        .info-update-shortcut-btn {
            background: var(--accent-gradient);
            border: none;
            color: #0f172a;
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 11px;
            font-weight: 800;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 5px;
            flex-shrink: 0;
            transition: 0.2s;
        }
        .info-update-shortcut-btn:hover, .info-update-shortcut-btn:active { opacity: 0.9; transform: scale(0.95); }

        /* Sidebar */
        .sidebar {
            position: fixed; top: 0; left: -290px; width: 290px; height: 100%;
            background: var(--sidebar-bg); box-shadow: 10px 0 30px rgba(0,0,0,0.5);
            transition: left 0.35s cubic-bezier(0.16, 1, 0.3, 1); z-index: 1000; padding: 20px;
            display: flex; flex-direction: column; border-right: 1px solid var(--border-color);
            overflow-y: auto;
        }
        .sidebar.open { left: 0; }
        .sidebar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 18px; font-weight: bold; }
        .close-btn { background: none; border: none; color: var(--text-muted); font-size: 20px; cursor: pointer; }
        .menu-category { font-size: 11px; text-transform: uppercase; color: var(--text-muted); margin: 16px 0 8px; font-weight: 800; letter-spacing: 1.2px; }
        
        .sidebar-item { 
            padding: 12px 16px; color: var(--text-color); text-decoration: none; border-radius: 50px; 
            margin-bottom: 6px; background: var(--card-bg); border: 1px solid var(--border-color);
            font-size: 13px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 12px; 
            transition: 0.2s;
        }
        .sidebar-item:hover, .sidebar-item:active { background: var(--accent-gradient); color: #0f172a; border-color: transparent; transform: scale(0.98); }
        .owner-menu { border-color: #f59e0b !important; display: none; }

        .overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 999; backdrop-filter: blur(4px); transition: 0.3s; }
        .overlay.active { display: block; }

        /* Main Content & Page Animation */
        .main-content { flex: 1; width: 100%; display: flex; flex-direction: column; overflow: hidden; position: relative; }
        .page-container { 
            display: none; width: 100%; height: 100%; padding: 20px; overflow-y: auto; 
            flex-direction: column; align-items: center; text-align: center; 
            opacity: 0; transform: scale(0.97) translateY(12px); 
            transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .page-container.active { display: flex; opacity: 1; transform: scale(1) translateY(0); }

        /* Smooth Loading Overlay */
        .page-loader {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: var(--bg-main); z-index: 500; display: flex; flex-direction: column;
            align-items: center; justify-content: center; gap: 12px; opacity: 0; pointer-events: none;
            transition: opacity 0.25s ease;
        }
        .page-loader.active { opacity: 1; pointer-events: auto; }
        .spinner {
            width: 38px; height: 38px; border: 3px solid var(--border-color);
            border-top-color: #38bdf8; border-radius: 50%; animation: spin 0.7s linear infinite;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        .auth-card, .downloader-card, .form-card {
            background: var(--card-bg); padding: 24px; border-radius: 24px; border: 1px solid var(--border-color);
            box-shadow: 0 12px 30px rgba(0,0,0,0.35); text-align: left; width: 100%; max-width: 450px; margin: auto;
        }
        .auth-card h2, .downloader-card h2, .form-card h2 { font-size: 20px; margin-bottom: 6px; text-align: center; font-weight: 700; }
        .auth-card p, .downloader-card p, .form-card p { font-size: 13px; color: var(--text-muted); margin-bottom: 20px; text-align: center; }
        
        .input-group { position: relative; margin-bottom: 14px; width: 100%; }
        .input-group label { display: block; font-size: 11px; font-weight: 800; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.8px; }
        .input-group input, .input-group textarea {
            width: 100%; padding: 12px 16px; background: var(--bg-main); border: 1px solid var(--border-color);
            border-radius: 50px; color: var(--text-color); font-size: 14px; outline: none; resize: none; transition: 0.2s;
        }
        .input-group textarea { border-radius: 20px; }
        .input-group input:focus, .input-group textarea:focus { border-color: #38bdf8; }
        
        .action-btn {
            width: 100%; padding: 14px; background: var(--accent-gradient); border: none; border-radius: 50px;
            color: #0f172a; font-weight: 800; font-size: 14px; cursor: pointer; margin-top: 10px; transition: 0.2s;
        }
        .action-btn:hover, .action-btn:active { opacity: 0.92; transform: scale(0.98); box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3); }
        .auth-switch { text-align: center; margin-top: 16px; font-size: 13px; color: var(--text-muted); }
        .auth-switch span { color: #38bdf8; font-weight: 600; cursor: pointer; }
        .forgot-password-link { text-align: right; margin-top: -6px; margin-bottom: 14px; font-size: 12px; color: #38bdf8; cursor: pointer; font-weight: 600; display: block; }

        /* Home Custom Buttons Styling */
        .home-action-buttons {
            display: flex;
            gap: 12px;
            width: 100%;
            max-width: 420px;
            margin: 20px auto 0;
            justify-content: center;
        }
        .home-big-btn {
            flex: 1;
            padding: 16px 10px;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 50px;
            color: var(--text-color);
            font-weight: 800;
            font-size: 13px;
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        .home-big-btn:hover, .home-big-btn:active {
            background: var(--accent-gradient);
            color: #0f172a;
            border-color: transparent;
            transform: scale(0.96);
            box-shadow: 0 15px 30px rgba(56, 189, 248, 0.25);
        }

        /* Saluran Style */
        .channel-feed-container {
            width: 100%;
            max-width: 480px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin: 0 auto;
            padding-bottom: 30px;
        }
        .channel-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            padding: 16px;
            text-align: left;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: relative;
        }
        .channel-header-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            color: var(--text-muted);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 8px;
        }
        .channel-header-info b { color: var(--text-color); font-size: 13px; }
        .channel-title { font-size: 15px; font-weight: 700; color: #38bdf8; }
        .channel-body-text { font-size: 14px; line-height: 1.5; color: var(--text-color); white-space: pre-wrap; }
        
        .channel-images-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 8px;
            margin-top: 4px;
        }
        .channel-img-wrapper {
            width: 100%;
            border-radius: 16px;
            overflow: hidden;
            background: #000;
            border: 1px solid var(--border-color);
            cursor: pointer;
            aspect-ratio: 1 / 1;
            position: relative;
        }
        .channel-img-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.3s ease;
        }
        .channel-img-wrapper:hover img { transform: scale(1.04); }

        .channel-video-wrapper {
            width: 100%;
            border-radius: 16px;
            overflow: hidden;
            background: #000;
            border: 1px solid var(--border-color);
            margin-top: 4px;
        }
        .channel-video-wrapper video {
            width: 100%;
            max-height: 260px;
            display: block;
        }

        .delete-post-btn {
            background: rgba(239, 68, 68, 0.15);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #ef4444;
            padding: 4px 10px;
            border-radius: 50px;
            font-size: 11px;
            font-weight: 700;
            cursor: pointer;
            transition: 0.2s;
        }
        .delete-post-btn:hover { background: #ef4444; color: #fff; }

        .reactions-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 4px;
            padding-top: 8px;
            border-top: 1px dashed var(--border-color);
        }
        .react-btn {
            background: var(--bg-main);
            border: 1px solid var(--border-color);
            border-radius: 50px;
            padding: 6px 12px;
            font-size: 12px;
            color: var(--text-color);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 4px;
            transition: 0.2s;
        }
        .react-btn:hover, .react-btn:active { background: rgba(56, 189, 248, 0.15); border-color: #38bdf8; transform: scale(0.95); }
        .react-btn.reacted { background: var(--accent-gradient); color: #0f172a; border-color: transparent; font-weight: 700; }

        .comments-section {
            margin-top: 8px;
            padding-top: 10px;
            border-top: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .comments-list {
            display: flex;
            flex-direction: column;
            gap: 6px;
            max-height: 150px;
            overflow-y: auto;
        }
        .comment-bubble {
            background: var(--bg-main);
            border: 1px solid var(--border-color);
            padding: 8px 12px;
            border-radius: 14px;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .comment-bubble b { color: #38bdf8; font-size: 12px; }
        .comment-input-row {
            display: flex;
            gap: 6px;
            margin-top: 4px;
        }
        .comment-input-row input {
            flex: 1;
            padding: 8px 14px;
            background: var(--bg-main);
            border: 1px solid var(--border-color);
            border-radius: 50px;
            color: var(--text-color);
            font-size: 12px;
            outline: none;
        }
        .comment-input-row button {
            background: var(--accent-gradient);
            border: none;
            color: #0f172a;
            padding: 8px 16px;
            border-radius: 50px;
            font-weight: 800;
            font-size: 12px;
            cursor: pointer;
        }

        .lightbox-modal {
            display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9); z-index: 3000; justify-content: center; align-items: center; backdrop-filter: blur(6px);
            padding: 20px;
        }
        .lightbox-modal.active { display: flex; }
        .lightbox-content { max-width: 100%; max-height: 90vh; border-radius: 16px; object-fit: contain; }

        .song-list-container { width: 100%; max-width: 500px; display: flex; flex-direction: column; gap: 15px; margin: 0 auto; padding-bottom: 30px; }
        .song-card { background: var(--card-bg); border: 1px solid var(--border-color); padding: 18px; border-radius: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); text-align: left; display: flex; flex-direction: column; gap: 12px; }
        .song-info h3 { font-size: 15px; margin-bottom: 2px; font-weight: 700; }
        .song-info span { font-size: 12px; color: var(--text-muted); }
        .song-player-controls { display: flex; align-items: center; gap: 12px; width: 100%; }
        .play-song-btn { background: var(--accent-gradient); border: none; color: #0f172a; width: 40px; height: 40px; border-radius: 50%; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .volume-control { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted); margin-left: auto; }
        .volume-control input[type=range] { width: 75px; accent-color: #38bdf8; cursor: pointer; }

        .inbox-modal, .owner-notif-modal, .settings-modal, .bubble-modal {
            display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.65); z-index: 2000; justify-content: center; align-items: center; backdrop-filter: blur(5px);
        }
        .inbox-modal.active, .owner-notif-modal.active, .settings-modal.active, .bubble-modal.active { display: flex; }
        
        .modal-box {
            background: var(--card-bg); border: 1px solid var(--border-color); padding: 24px; border-radius: 24px;
            max-width: 420px; width: 92%; max-height: 85vh; overflow-y: auto; box-shadow: 0 25px 50px rgba(0,0,0,0.5);
            display: flex; flex-direction: column; gap: 16px; text-align: left;
        }
        .modal-header { display: flex; justify-content: space-between; align-items: center; font-weight: 700; font-size: 17px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; }
        
        .inbox-list { display: flex; flex-direction: column; gap: 12px; }
        .inbox-item-bubble {
            display: flex; align-items: flex-start; gap: 12px; background: var(--bg-main); border: 1px solid var(--border-color);
            padding: 14px; border-radius: 20px; box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
        .inbox-avatar-circle {
            width: 40px; height: 40px; border-radius: 50%; background: var(--accent-gradient); color: #0f172a;
            font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0;
        }
        .inbox-content-box { flex: 1; display: flex; flex-direction: column; gap: 4px; font-size: 13px; }
        .inbox-content-box b { color: var(--text-color); font-size: 13px; }
        .inbox-content-box span { color: var(--text-muted); font-size: 11px; }
        .inbox-img-preview { margin-top: 6px; max-width: 100%; max-height: 120px; border-radius: 12px; object-fit: cover; border: 1px solid var(--border-color); }
        .reply-box-owner { margin-top: 8px; background: rgba(56, 189, 248, 0.1); border-left: 3px solid #38bdf8; padding: 6px 10px; border-radius: 8px; font-size: 12px; }

        /* Profile Styles */
        .profile-container-card {
            background: var(--card-bg);
            padding: 24px;
            border-radius: 24px;
            border: 1px solid var(--border-color);
            width: 100%;
            max-width: 420px;
            text-align: center;
            box-shadow: 0 12px 30px rgba(0,0,0,0.3);
            margin: auto;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .profile-header-area {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 16px;
        }
        .profile-avatar-large {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: var(--accent-gradient);
            color: #0f172a;
            font-size: 28px;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 20px rgba(56, 189, 248, 0.25);
        }
        .profile-tabs-header {
            display: flex;
            background: var(--bg-main);
            padding: 4px;
            border-radius: 50px;
            border: 1px solid var(--border-color);
            gap: 4px;
        }
        .profile-tab-btn {
            flex: 1;
            padding: 8px;
            border: none;
            background: transparent;
            color: var(--text-muted);
            font-size: 12px;
            font-weight: 700;
            border-radius: 50px;
            cursor: pointer;
            transition: 0.2s;
        }
        .profile-tab-btn.active {
            background: var(--accent-gradient);
            color: #0f172a;
        }
        .profile-tab-content {
            display: none;
            flex-direction: column;
            gap: 12px;
            text-align: left;
        }
        .profile-tab-content.active {
            display: flex;
        }
        .profile-info-row {
            background: var(--bg-main);
            padding: 12px 14px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .profile-info-row span { font-size: 11px; color: var(--text-muted); font-weight: 700; text-transform: uppercase; }
        .profile-info-row b { font-size: 13px; color: var(--text-color); }
        
        .logout-btn { background: #ef4444; color: white; border: none; padding: 12px; width: 100%; border-radius: 50px; font-weight: 700; cursor: pointer; transition: 0.2s; margin-top: 6px; }
        .logout-btn:hover { opacity: 0.9; box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3); }

        /* Settings */
        .setting-group { display: flex; flex-direction: column; gap: 8px; text-align: left; }
        .setting-label { font-size: 11px; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.8px; }
        .setting-options { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
        .theme-btn, .notif-btn { padding: 10px; border-radius: 14px; border: 1px solid var(--border-color); background: var(--bg-main); color: var(--text-color); font-size: 12px; font-weight: 700; cursor: pointer; transition: 0.2s; }
        .theme-btn.active, .notif-btn.active { background: var(--accent-gradient); color: #0f172a; border-color: transparent; }
        .bubble-btn { background: var(--accent-gradient); color: #0f172a; border: none; padding: 10px 24px; border-radius: 50px; font-weight: 800; cursor: pointer; }

        /* Bottom Nav */
        .bottom-nav {
            position: fixed; bottom: 12px; left: 50%; transform: translateX(-50%);
            width: 92%; max-width: 440px; background: var(--bottom-nav-bg); display: flex; justify-content: space-around;
            padding: 8px 12px; border-radius: 50px; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45); border: 1px solid var(--border-color); z-index: 100;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bottom-nav.hidden { transform: translate(-50%, 120px); opacity: 0; pointer-events: none; }
        .nav-item { 
            color: var(--text-muted); text-decoration: none; font-size: 11px; display: flex; flex-direction: column; 
            align-items: center; justify-content: center; cursor: pointer; padding: 10px 24px; border-radius: 50px; 
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); font-weight: 800; 
        }
        .nav-item.active, .nav-item:hover, .nav-item:active { 
            color: #0f172a; 
            background: var(--accent-gradient); 
            transform: scale(0.95);
            box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
        }
    </style>
</head>
<body class="theme-default">

    <!-- Top Bar -->
    <div class="top-bar">
        <div class="top-left">
            <button class="menu-btn" id="top-left-btn" onclick="handleTopButton()">☰</button>
            <div class="app-title" id="page-title">Sea Tycoon</div>
        </div>
        <div class="top-right">
            <button class="top-icon-btn" onclick="toggleInboxModal()" title="Kotak Masuk">
                📥
                <div class="badge-dot" id="inbox-badge-dot"></div>
            </button>
            <button class="top-icon-btn" onclick="toggleSettingsModal()" title="Pengaturan">⚙️</button>
        </div>
    </div>

    <!-- Marquee Banner & Info Update Shortcut Bar -->
    <div class="header-banner-container" id="main-header-banner" style="display: none;">
        <div class="marquee-wrapper">
            <span class="marquee-text">📢 SELAMAT DATANG DI SEA TYCOON KALIAN BISA MENCOBA FITUR PREMIUM DARI KAMI DAN MENDAPATKAN UPDATE SETIAP HARI ✨</span>
        </div>
        <button class="info-update-shortcut-btn" onclick="openInfoUpdateWithLoader()">
            Info Update
        </button>
    </div>

    <div id="overlay" class="overlay" onclick="toggleSidebar()"></div>

    <!-- Sidebar -->
    <div id="sidebar" class="sidebar">
        <div class="sidebar-header">
            <span>Menu Navigasi</span>
            <button class="close-btn" onclick="toggleSidebar()">✕</button>
        </div>
        
        <div class="menu-category">Fitur Utama</div>
        <div class="sidebar-item" onclick="openMenu('home')">Beranda</div>
        <div class="sidebar-item" onclick="openMenu('tiktok')">TikTok Downloader</div>
        <div class="sidebar-item" onclick="openMenu('req-fitur')">Req Fitur / Lagu</div>

        <div class="menu-category owner-menu-label" style="display:none;">Panel Owner</div>
        <div class="sidebar-item owner-menu" onclick="showBubble('Panel Kontrol Owner Aktif 👑')">Kontrol Panel Owner</div>
        <div class="sidebar-item owner-menu" onclick="openMenu('owner-notif-user')">Notif User & Request</div>
        <div class="sidebar-item owner-menu" onclick="openMenu('add-lagu')">Tambah Lagu</div>
        <div class="sidebar-item owner-menu" onclick="openMenu('add-info-update')">Buat Info Update Baru</div>

        <div class="menu-category">Fitur Saluran Eksklusif</div>
        <div class="sidebar-item" onclick="openInfoUpdateWithLoader()">Saluran Info Update</div>
        <div class="sidebar-item" onclick="openMenu('lihat-kenangan')">Lihat Saluran Kenangan</div>
        <div class="sidebar-item" onclick="openMenu('add-kenangan')">Kirim Kenangan (Multi Foto)</div>
        <div class="sidebar-item" onclick="openMenu('lihat-cerita')">Lihat Saluran Cerita</div>
        <div class="sidebar-item" onclick="openMenu('add-cerita')">Kirim Cerita</div>
        <div class="sidebar-item" onclick="openMenu('susun-kata')">Tebak Kata</div>

        <div class="menu-category">Eksplorasi Lainnya</div>
        <div class="sidebar-item" onclick="openMenu('tempat-lagu')">Tempat Lagu</div>
    </div>

    <!-- Main Content -->
    <div class="main-content" id="content-area">
        
        <!-- Smooth Loading Overlay -->
        <div id="page-loader" class="page-loader">
            <div class="spinner"></div>
            <span style="font-size: 13px; font-weight: 600; color: #38bdf8;" id="loader-text">Memuat Halaman...</span>
        </div>

        <!-- Auth -->
        <div id="page-auth" class="page-container">
            <div class="auth-card">
                <h2 id="auth-title">Selamat Datang!</h2>
                <p id="auth-subtitle">Masuk dengan email & password akunmu</p>
                
                <div id="form-main-inputs">
                    <div class="input-group auth-reg-only" id="group-fullname" style="display:none;">
                        <label>Nama Lengkap</label>
                        <input type="text" id="input-fullname" placeholder="Masukkan nama lengkap...">
                    </div>
                    <div class="input-group auth-reg-only" id="group-phone" style="display:none;">
                        <label>Nomor Telepon</label>
                        <input type="tel" id="input-phone" placeholder="08xxxxxxxxxx...">
                    </div>
                    <div class="input-group">
                        <label>Email Pribadi</label>
                        <input type="email" id="input-email" placeholder="nama@email.com...">
                    </div>
                    <div class="input-group" id="group-password">
                        <label>Password</label>
                        <input type="password" id="input-password" placeholder="Minimal 6 karakter...">
                    </div>
                    <span id="forgot-pw-trigger" class="forgot-password-link" onclick="showForgotPasswordView()">Lupa Password?</span>
                </div>

                <button class="action-btn" id="auth-btn-action" onclick="handleAuthSubmit()">Masuk</button>
                <div class="auth-switch" id="auth-switch-container">
                    <span onclick="toggleAuthMode()">Belum punya akun? Daftar sekarang</span>
                </div>
            </div>
        </div>

        <!-- Beranda -->
        <div id="page-home" class="page-container">
            <div style="margin: auto 0; width: 100%; display: flex; flex-direction: column; align-items: center;">
                <h2>Selamat Datang, <span id="welcome-username" style="color: #38bdf8;">User</span>!</h2>
                <p style="color: var(--text-muted); margin-top: 8px; max-width: 330px; font-size: 13px;">Gunakan menu di bawah atau tombol pilihan cepat untuk masuk ke saluran info update, kenangan & cerita.</p>
                
                <div class="home-action-buttons">
                    <button class="home-big-btn" onclick="openInfoUpdateWithLoader()">
                        Info Update
                    </button>
                    <button class="home-big-btn" onclick="openMenu('lihat-kenangan')">
                        Kenangan
                    </button>
                    <button class="home-big-btn" onclick="openMenu('lihat-cerita')">
                        Cerita
                    </button>
                </div>
            </div>
        </div>

        <!-- Saluran Info Update -->
        <div id="page-info-update" class="page-container">
            <div style="width: 100%; max-width: 480px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
                <h2 style="font-size: 17px; font-weight: 700;">Saluran Info Update</h2>
                <button class="action-btn owner-only-action" id="btn-add-info-top" style="width: auto; padding: 8px 16px; font-size: 12px; margin: 0; display: none;" onclick="openMenu('add-info-update')">+ Buat Update</button>
            </div>
            <div class="channel-feed-container" id="info-update-feed-wrapper"></div>
        </div>

        <!-- Buat Info Update -->
        <div id="page-add-info-update" class="page-container">
            <div class="form-card">
                <h2>Buat Info Update</h2>
                <p>Kirim informasi update baru ke saluran (Support Foto & Video).</p>
                <div class="input-group">
                    <label>Judul Informasi</label>
                    <input type="text" id="info-judul" placeholder="Contoh: Update Fitur Baru v2.5...">
                </div>
                <div class="input-group">
                    <label>Isi Pesan / Pengumuman</label>
                    <textarea id="info-isi" rows="4" placeholder="Tuliskan detail info update..."></textarea>
                </div>
                <div class="input-group">
                    <label>Lampirkan Foto (Bisa banyak foto)</label>
                    <input type="file" id="info-imgs" accept="image/*" multiple style="padding: 8px; font-size: 12px;">
                </div>
                <div class="input-group">
                    <label>Atau Lampirkan Video (Opsional)</label>
                    <input type="file" id="info-video" accept="video/*" style="padding: 8px; font-size: 12px;">
                </div>
                <button class="action-btn" onclick="submitInfoUpdate()">Publikasikan Info Update</button>
            </div>
        </div>

        <!-- TikTok Downloader (Updated & Working) -->
        <div id="page-tiktok" class="page-container">
            <div class="downloader-card">
                <h2>TikTok Downloader</h2>
                <p>Unduh video TikTok tanpa watermark dengan cepat dan mudah.</p>
                <div class="input-group">
                    <label>Link Video TikTok</label>
                    <input type="text" id="tiktok-url" placeholder="Tempel link video TikTok di sini (misal: https://v.tiktok.com/...)">
                </div>
                <button class="action-btn" id="tiktok-download-btn" onclick="downloadTikTokVideo()">Download Tanpa Watermark</button>
                
                <!-- Hasil Download TikTok -->
                <div id="tiktok-result-container" style="margin-top: 20px; display: none; flex-direction: column; gap: 12px; text-align: left;">
                    <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 5px 0;">
                    <h3 style="font-size: 14px; color: #38bdf8; text-align: center;">Hasil Video Ditemukan!</h3>
                    <div id="tiktok-video-preview" style="width: 100%; border-radius: 12px; overflow: hidden; background: #000; border: 1px solid var(--border-color);"></div>
                    <a id="tiktok-download-link" href="#" target="_blank" class="action-btn" style="text-align: center; text-decoration: none; display: block; margin-top: 5px;">Simpan Video MP4 (No Watermark)</a>
                </div>
            </div>
        </div>

        <!-- Req Fitur -->
        <div id="page-req-fitur" class="page-container">
            <div class="form-card">
                <h2>Req Fitur / Kendala</h2>
                <p>Kirimkan masukan atau request fitur baru kepada Owner.</p>
                <div class="input-group">
                    <label>Pesan & Detail Request</label>
                    <textarea id="req-message" rows="4" placeholder="Tuliskan detail request..."></textarea>
                </div>
                <div class="input-group">
                    <label>Lampirkan Foto (Opsional)</label>
                    <input type="file" id="req-image" accept="image/*" style="padding: 8px; font-size: 12px;">
                </div>
                <button class="action-btn" onclick="submitUserRequest()">Kirim Request</button>
            </div>
        </div>

        <!-- Kirim Kenangan -->
        <div id="page-add-kenangan" class="page-container">
            <div class="form-card">
                <h2>Kirim Kenangan</h2>
                <p>Bagikan memori spesialmu dengan dukungan banyak foto.</p>
                <div class="input-group">
                    <label>Judul Kenangan</label>
                    <input type="text" id="kenangan-judul" placeholder="Contoh: Liburan Akhir Pekan...">
                </div>
                <div class="input-group">
                    <label>Catatan / Kenangan Momen</label>
                    <textarea id="kenangan-isi" rows="3" placeholder="Tuliskan cerita kenangan indahmu..."></textarea>
                </div>
                <div class="input-group">
                    <label>Pilih Foto (Bisa banyak foto sekaligus!)</label>
                    <input type="file" id="kenangan-imgs" accept="image/*" multiple style="padding: 8px; font-size: 12px;">
                </div>
                <button class="action-btn" onclick="submitKenangan()">Publikasikan Kenangan</button>
            </div>
        </div>

        <!-- Lihat Kenangan -->
        <div id="page-lihat-kenangan" class="page-container">
            <div style="width: 100%; max-width: 480px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
                <h2 style="font-size: 17px; font-weight: 700;">Saluran Kenangan</h2>
                <button class="action-btn" style="width: auto; padding: 8px 16px; font-size: 12px; margin: 0;" onclick="openMenu('add-kenangan')">+ Buat Kenangan</button>
            </div>
            <div class="channel-feed-container" id="kenangan-feed-wrapper"></div>
        </div>

        <!-- Kirim Cerita -->
        <div id="page-add-cerita" class="page-container">
            <div class="form-card">
                <h2>Kirim Cerita</h2>
                <p>Bagikan ceritamu secara langsung dengan akun aktif.</p>
                <div class="input-group">
                    <label>Isi Cerita</label>
                    <textarea id="cerita-isi" rows="5" placeholder="Tuliskan ceritamu di sini..."></textarea>
                </div>
                <button class="action-btn" onclick="submitCerita()">Publikasikan Cerita</button>
            </div>
        </div>

        <!-- Lihat Cerita -->
        <div id="page-lihat-cerita" class="page-container">
            <div style="width: 100%; max-width: 480px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
                <h2 style="font-size: 17px; font-weight: 700;">Saluran Cerita</h2>
                <button class="action-btn" style="width: auto; padding: 8px 16px; font-size: 12px; margin: 0;" onclick="openMenu('add-cerita')">+ Buat Cerita</button>
            </div>
            <div class="channel-feed-container" id="cerita-feed-wrapper"></div>
        </div>

        <!-- Tebak Kata -->
        <div id="page-susun-kata" class="page-container">
            <div class="form-card" style="text-align: center;">
                <h2>Tebak Kata</h2>
                <p>Asah otakmu dengan menebak susunan kata acak.</p>
                <div style="background: var(--bg-main); padding: 20px; border-radius: 20px; margin: 15px 0; border: 1px solid var(--border-color);">
                    <h3 style="letter-spacing: 4px; color: #38bdf8;" id="scramble-word-display">R T A K I</h3>
                </div>
                <div class="input-group">
                    <input type="text" placeholder="Jawaban kamu..." style="text-align: center;">
                </div>
                <button class="action-btn" onclick="showBubble('Fitur permainan segera aktif sepenuhnya!')">Kirim Jawaban</button>
            </div>
        </div>

        <!-- Notif User (Owner) -->
        <div id="page-owner-notif-user" class="page-container">
            <div style="width: 100%; max-width: 550px; margin-bottom: 20px; text-align: left;">
                <h2 style="font-size: 18px; font-weight: 700;">Notif User & Request</h2>
            </div>
            <div id="owner-requests-wrapper" style="width: 100%; max-width: 550px; display: flex; flex-direction: column; gap: 15px; padding-bottom: 30px;"></div>
        </div>

        <!-- Add Lagu -->
        <div id="page-add-lagu" class="page-container">
            <div class="form-card">
                <h2>Tambah Lagu Baru</h2>
                <div class="input-group">
                    <label>Judul Lagu</label>
                    <input type="text" id="input-song-title" placeholder="Judul lagu...">
                </div>
                <div class="input-group">
                    <label>URL Audio (.mp3)</label>
                    <input type="text" id="input-song-url" placeholder="https://...">
                </div>
                <button class="action-btn" onclick="saveNewSong()">Simpan Lagu</button>
            </div>
        </div>

        <!-- Tempat Lagu -->
        <div id="page-tempat-lagu" class="page-container">
            <div style="width: 100%; max-width: 500px; margin-bottom: 20px; text-align: left;">
                <h2 style="font-size: 18px; font-weight: 700;">Tempat Lagu</h2>
            </div>
            <div class="song-list-container" id="song-list-wrapper"></div>
        </div>

        <!-- Profile -->
        <div id="page-profile" class="page-container">
            <div class="profile-container-card">
                <div class="profile-header-area">
                    <div class="profile-avatar-large" id="profile-initial">U</div>
                    <h3 id="profile-name" style="font-size: 18px; font-weight: 700;">Nama Lengkap</h3>
                    <span id="profile-role-badge" style="font-size: 11px; color: #38bdf8; font-weight: bold; background: rgba(56, 189, 248, 0.12); padding: 3px 10px; border-radius: 50px;">Member Aktif</span>
                </div>

                <div class="profile-tabs-header">
                    <button class="profile-tab-btn active" onclick="switchProfileTab('info')">Profil</button>
                    <button class="profile-tab-btn" onclick="switchProfileTab('password')">Password</button>
                    <button class="profile-tab-btn" onclick="switchProfileTab('security')">Keamanan</button>
                </div>

                <div class="profile-tab-content active" id="ptab-info">
                    <div class="profile-info-row">
                        <span>Nama Lengkap</span>
                        <b id="profile-display-name">-</b>
                    </div>
                    <div class="profile-info-row">
                        <span>Nomor Telepon</span>
                        <b id="profile-display-phone">-</b>
                    </div>
                    <div class="profile-info-row">
                        <span>Email Akun (Gmail)</span>
                        <b id="profile-display-email">-</b>
                    </div>
                </div>

                <div class="profile-tab-content" id="ptab-password">
                    <div class="input-group" style="margin-bottom: 8px;">
                        <label>Password Baru</label>
                        <input type="password" id="profile-new-pass" placeholder="Min. 6 karakter...">
                    </div>
                    <button class="action-btn" style="margin-top: 4px;" onclick="updateProfilePassword()">Perbarui Password</button>
                </div>

                <div class="profile-tab-content" id="ptab-security">
                    <div class="profile-info-row">
                        <span>Status Sesi</span>
                        <b>Terverifikasi Aman 🔒</b>
                    </div>
                    <p style="font-size: 12px; color: var(--text-muted); text-align: left;">Pastikan Anda selalu keluar akun jika menggunakan perangkat umum.</p>
                </div>

                <button class="logout-btn" onclick="logoutUser()">Keluar Akun</button>
            </div>
        </div>

    </div>

    <!-- Modals -->
    <div id="inbox-modal" class="inbox-modal" onclick="toggleInboxModal()">
        <div class="modal-box" onclick="event.stopPropagation()">
            <div class="modal-header">
                <span>Kotak Masuk</span>
                <button class="close-btn" onclick="toggleInboxModal()">✕</button>
            </div>
            <div class="inbox-list" id="user-inbox-wrapper"></div>
        </div>
    </div>

    <div id="settings-modal" class="settings-modal" onclick="toggleSettingsModal()">
        <div class="modal-box" onclick="event.stopPropagation()">
            <div class="modal-header">
                <span>Pengaturan Tema</span>
                <button class="close-btn" onclick="toggleSettingsModal()">✕</button>
            </div>
            <div class="setting-group">
                <span class="setting-label">Pilihan Tampilan</span>
                <div class="setting-options">
                    <button class="theme-btn active" id="theme-default" onclick="setTheme('default')">Default</button>
                    <button class="theme-btn" id="theme-gelap" onclick="setTheme('gelap')">Gelap</button>
                    <button class="theme-btn" id="theme-galaxy" onclick="setTheme('galaxy')">Galaxy</button>
                    <button class="theme-btn" id="theme-biru" onclick="setTheme('biru')">Biru</button>
                    <button class="theme-btn" id="theme-putih" onclick="setTheme('putih')">Putih</button>
                </div>
            </div>
        </div>
    </div>

    <div id="bubble-modal" class="bubble-modal" onclick="closeBubble()">
        <div class="modal-box" style="text-align: center; max-width: 300px;" onclick="event.stopPropagation()">
            <p id="bubble-text" style="margin-bottom: 15px; font-size: 13px; font-weight: 600;">Notifikasi...</p>
            <button class="bubble-btn" onclick="closeBubble()">Mengerti</button>
        </div>
    </div>

    <div id="lightbox-modal" class="lightbox-modal" onclick="closeLightbox()">
        <img id="lightbox-img" class="lightbox-content" src="">
    </div>

    <!-- Bottom Nav -->
    <div class="bottom-nav" id="bottom-nav">
        <a class="nav-item active" id="nav-beranda" onclick="switchTab('Beranda')">Beranda</a>
        <a class="nav-item" id="nav-tiktok" onclick="switchTab('TikTok')">TikTok</a>
        <a class="nav-item" id="nav-profile" onclick="switchTab('Profile')">Profile</a>
    </div>

    <script>
        let authState = 'login'; 
        let currentUser = null;

        window.onload = function() {
            const savedUser = localStorage.getItem('sea_tycoon_user');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                applyUserSession();
                openMenu('home');
                checkInboxBadge();
            } else {
                openAuthScreen();
            }
        };

        function openAuthScreen() {
            document.getElementById('bottom-nav').classList.add('hidden');
            document.getElementById('main-header-banner').style.display = 'none';
            document.querySelectorAll('.page-container').forEach(p => p.classList.remove('active'));
            document.getElementById('page-auth').classList.add('active');
            document.getElementById('page-title').innerText = 'Autentikasi';
            setAuthState('login');
        }

        function setAuthState(state) {
            authState = state;
            const title = document.getElementById('auth-title');
            const subtitle = document.getElementById('auth-subtitle');
            const btnAction = document.getElementById('auth-btn-action');
            const switchContainer = document.getElementById('auth-switch-container');
            const regOnlyElements = document.querySelectorAll('.auth-reg-only');

            if (state === 'login') {
                title.innerText = "Selamat Datang Kembali!";
                subtitle.innerText = "Masuk dengan email & password akunmu";
                btnAction.innerText = "Masuk";
                regOnlyElements.forEach(el => el.style.display = 'none');
                switchContainer.innerHTML = `<span onclick="setAuthState('register')">Belum punya akun? Daftar sekarang</span>`;
            } else if (state === 'register') {
                title.innerText = "Buat Akun Baru";
                subtitle.innerText = "Daftar dengan melengkapi data dirimu";
                btnAction.innerText = "Daftar Sekarang";
                regOnlyElements.forEach(el => el.style.display = 'block');
                switchContainer.innerHTML = `<span onclick="setAuthState('login')">Sudah punya akun? Masuk di sini</span>`;
            }
        }

        function toggleAuthMode() {
            if (authState === 'login') setAuthState('register');
            else setAuthState('login');
        }

        function showForgotPasswordView() {
            let emailInput = document.getElementById('input-email').value.trim();
            if (!emailInput) {
                showBubble('Masukkan email akun terlebih dahulu! ⚠️');
                return;
            }
            let newPass = prompt("Masukkan password baru (minimal 6 karakter):");
            if (newPass && newPass.length >= 6) {
                let dbUsers = JSON.parse(localStorage.getItem('sea_tycoon_db') || '[]');
                let userIndex = dbUsers.findIndex(u => u.email === emailInput);
                if (userIndex !== -1) {
                    dbUsers[userIndex].password = newPass;
                    localStorage.setItem('sea_tycoon_db', JSON.stringify(dbUsers));
                    showBubble('Password berhasil diubah! Silakan masuk ✨');
                } else {
                    showBubble('Email tidak ditemukan dalam sistem. ❌');
                }
            } else {
                showBubble('Password baru tidak valid! ⚠️');
            }
        }

        function handleAuthSubmit() {
            const emailInput = document.getElementById('input-email').value.trim();
            const passwordInput = document.getElementById('input-password').value.trim();
            const fullnameInput = document.getElementById('input-fullname').value.trim();
            const phoneInput = document.getElementById('input-phone').value.trim();
            let dbUsers = JSON.parse(localStorage.getItem('sea_tycoon_db') || '[]');

            if (authState === 'login') {
                if (!emailInput || !passwordInput) {
                    showBubble('Email dan Password wajib diisi! ⚠️');
                    return;
                }
                if (emailInput === 'owner' || (emailInput === 'owner@seatycoon.com' && passwordInput === 'owner123')) {
                    currentUser = { fullname: 'Owner Official', phone: '-', email: 'owner@seatycoon.com', role: 'Owner' };
                    finalizeLogin();
                    return;
                }
                let found = dbUsers.find(u => u.email === emailInput && u.password === passwordInput);
                if (found) {
                    currentUser = found;
                    finalizeLogin();
                } else {
                    showBubble('Email atau Password salah! ❌');
                }
            } else if (authState === 'register') {
                if (!fullnameInput || !phoneInput || !emailInput || !passwordInput) {
                    showBubble('Semua kolom formulir wajib diisi! ⚠️');
                    return;
                }
                if (passwordInput.length < 6) {
                    showBubble('Password minimal 6 karakter! ⚠️');
                    return;
                }
                if (dbUsers.some(u => u.email === emailInput)) {
                    showBubble('Email sudah terdaftar dalam sistem! ⚠️');
                    return;
                }
                const newUser = { 
                    fullname: fullnameInput, 
                    phone: phoneInput, 
                    email: emailInput, 
                    password: passwordInput, 
                    role: 'Member' 
                };
                dbUsers.push(newUser);
                localStorage.setItem('sea_tycoon_db', JSON.stringify(dbUsers));
                currentUser = newUser;
                finalizeLogin();
            }
        }

        function finalizeLogin() {
            localStorage.setItem('sea_tycoon_user', JSON.stringify(currentUser));
            applyUserSession();
            openMenu('home');
            showBubble(`Berhasil masuk, Selamat datang ${currentUser.fullname}! ✨`);
        }

        function applyUserSession() {
            if (!currentUser) return;
            document.getElementById('welcome-username').innerText = currentUser.fullname;
            document.getElementById('profile-name').innerText = currentUser.fullname;
            document.getElementById('profile-display-name').innerText = currentUser.fullname;
            document.getElementById('profile-display-phone').innerText = currentUser.phone || '-';
            document.getElementById('profile-display-email').innerText = currentUser.email;
            document.getElementById('profile-initial').innerText = currentUser.fullname.charAt(0).toUpperCase();
            document.getElementById('profile-role-badge').innerText = currentUser.role === 'Owner' ? 'Owner Official' : 'Member Aktif';

            const isOwner = (currentUser.role === 'Owner');
            document.querySelectorAll('.owner-menu-label').forEach(el => el.style.display = isOwner ? 'block' : 'none');
            document.querySelectorAll('.owner-menu').forEach(el => el.style.display = isOwner ? 'flex' : 'none');
            document.querySelectorAll('.owner-only-action').forEach(el => el.style.display = isOwner ? 'block' : 'none');
        }

        function logoutUser() {
            localStorage.removeItem('sea_tycoon_user');
            currentUser = null;
            openAuthScreen();
            showBubble('Berhasil keluar akun. Sampai jumpa!');
        }

        let currentView = 'home';
        function handleTopButton() {
            if (currentView === 'home') toggleSidebar();
            else openMenu('home');
        }

        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('open');
            document.getElementById('overlay').classList.toggle('active');
        }

        function toggleSettingsModal() {
            document.getElementById('settings-modal').classList.toggle('active');
        }

        function toggleInboxModal() {
            const modal = document.getElementById('inbox-modal');
            modal.classList.toggle('active');
            if (modal.classList.contains('active')) renderUserInbox();
        }

        function setTheme(themeName) {
            document.body.className = `theme-${themeName}`;
            document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`theme-${themeName}`).classList.add('active');
        }

        function openInfoUpdateWithLoader() {
            if(document.getElementById('sidebar').classList.contains('open')) toggleSidebar();
            triggerSmoothLoader("Memuat Saluran Info Update...", () => {
                openMenu('info-update');
            });
        }

        function triggerSmoothLoader(text, callback) {
            const loader = document.getElementById('page-loader');
            document.getElementById('loader-text').innerText = text;
            loader.classList.add('active');
            setTimeout(() => {
                loader.classList.remove('active');
                if (callback) callback();
            }, 1000);
        }

        function openMenu(menu) {
            if(document.getElementById('sidebar').classList.contains('open')) toggleSidebar();
            if(!currentUser) { openAuthScreen(); return; }

            currentView = menu;
            document.querySelectorAll('.page-container').forEach(p => p.classList.remove('active'));
            const bottomNav = document.getElementById('bottom-nav');
            const mainHeaderBanner = document.getElementById('main-header-banner');
            const title = document.getElementById('page-title');
            const topLeftBtn = document.getElementById('top-left-btn');

            if (menu === 'info-update' || menu === 'lihat-kenangan' || menu === 'lihat-cerita') {
                bottomNav.classList.add('hidden');
            } else {
                bottomNav.classList.remove('hidden');
            }

            if (menu === 'home') {
                document.getElementById('page-home').classList.add('active');
                mainHeaderBanner.style.display = 'flex';
                title.innerText = 'Sea Tycoon';
                topLeftBtn.innerText = '☰';
                setActiveNav('Beranda');
            } else {
                mainHeaderBanner.style.display = 'none';
            }

            if (menu === 'info-update') {
                document.getElementById('page-info-update').classList.add('active');
                title.innerText = 'Info Update';
                topLeftBtn.innerText = '✕';
                renderInfoUpdateFeed();
            } else if (menu === 'add-info-update') {
                if (currentUser.role !== 'Owner') { showBubble('Akses khusus Owner!'); return; }
                document.getElementById('page-add-info-update').classList.add('active');
                title.innerText = 'Buat Info Update';
                topLeftBtn.innerText = '✕';
            } else if (menu === 'tiktok') {
                document.getElementById('page-tiktok').classList.add('active');
                title.innerText = 'TikTok Downloader';
                topLeftBtn.innerText = '✕';
                setActiveNav('TikTok');
            } else if (menu === 'req-fitur') {
                document.getElementById('page-req-fitur').classList.add('active');
                title.innerText = 'Req Fitur / Kendala';
                topLeftBtn.innerText = '✕';
            } else if (menu === 'add-kenangan') {
                document.getElementById('page-add-kenangan').classList.add('active');
                title.innerText = 'Kirim Kenangan';
                topLeftBtn.innerText = '✕';
            } else if (menu === 'lihat-kenangan') {
                document.getElementById('page-lihat-kenangan').classList.add('active');
                title.innerText = 'Saluran Kenangan';
                topLeftBtn.innerText = '✕';
                renderKenanganFeed();
            } else if (menu === 'add-cerita') {
                document.getElementById('page-add-cerita').classList.add('active');
                title.innerText = 'Kirim Cerita';
                topLeftBtn.innerText = '✕';
            } else if (menu === 'lihat-cerita') {
                document.getElementById('page-lihat-cerita').classList.add('active');
                title.innerText = 'Saluran Cerita';
                topLeftBtn.innerText = '✕';
                renderCeritaFeed();
            } else if (menu === 'susun-kata') {
                document.getElementById('page-susun-kata').classList.add('active');
                title.innerText = 'Tebak Kata';
                topLeftBtn.innerText = '✕';
            } else if (menu === 'owner-notif-user') {
                if (currentUser.role !== 'Owner') { showBubble('Akses ditolak!'); return; }
                document.getElementById('page-owner-notif-user').classList.add('active');
                title.innerText = 'Notif User (Owner)';
                topLeftBtn.innerText = '✕';
                renderOwnerRequests();
            } else if (menu === 'add-lagu') {
                if (currentUser.role !== 'Owner') { showBubble('Akses ditolak!'); return; }
                document.getElementById('page-add-lagu').classList.add('active');
                title.innerText = 'Tambah Lagu (Owner)';
                topLeftBtn.innerText = '✕';
            } else if (menu === 'tempat-lagu') {
                document.getElementById('page-tempat-lagu').classList.add('active');
                title.innerText = 'Tempat Lagu';
                topLeftBtn.innerText = '✕';
                renderSongList();
            } else if (menu === 'profile') {
                triggerSmoothLoader("Memuat Profil Pengguna...", () => {
                    document.getElementById('page-profile').classList.add('active');
                    title.innerText = 'Profile User';
                    topLeftBtn.innerText = '✕';
                    setActiveNav('Profile');
                });
            }
        }

        /* FITUR TIKTOK DOWNLOADER YANG BERFUNGSI MENGAMBIL VIDEO TANPA WATERMARK */
        async function downloadTikTokVideo() {
            const urlInput = document.getElementById('tiktok-url').value.trim();
            const resultContainer = document.getElementById('tiktok-result-container');
            const previewBox = document.getElementById('tiktok-video-preview');
            const downloadLink = document.getElementById('tiktok-download-link');
            const downloadBtn = document.getElementById('tiktok-download-btn');

            if (!urlInput) {
                showBubble('Silakan masukkan link video TikTok terlebih dahulu! ⚠️');
                return;
            }

            downloadBtn.innerText = "Memproses Unduhan...";
            downloadBtn.disabled = true;
            resultContainer.style.display = 'none';

            try {
                const apiUrl = `https://tikwm.com/api/?url=${encodeURIComponent(urlInput)}`;
                const response = await fetch(apiUrl);
                const resJson = await response.json();

                if (resJson && resJson.code === 0 && resJson.data) {
                    const videoData = resJson.data;
                    const noWatermarkUrl = videoData.play;

                    previewBox.innerHTML = `
                        <video controls style="width: 100%; max-height: 280px; display: block;" src="${noWatermarkUrl}"></video>
                    `;
                    downloadLink.href = noWatermarkUrl;
                    resultContainer.style.display = 'flex';
                    showBubble('Video TikTok berhasil diproses tanpa watermark! ✨');
                } else {
                    showBubble('Gagal mengambil video. Pastikan link TikTok valid dan publik! ❌');
                }
            } catch (error) {
                console.error(error);
                showBubble('Terjadi kesalahan jaringan saat mengunduh video. ⚠️');
            } finally {
                downloadBtn.innerText = "Download Tanpa Watermark";
                downloadBtn.disabled = false;
            }
        }

        function switchTab(name) {
            if (name === 'Beranda') openMenu('home');
            else if (name === 'TikTok') openMenu('tiktok');
            else if (name === 'Profile') openMenu('profile');
        }

        function switchProfileTab(tabName) {
            document.querySelectorAll('.profile-tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.profile-tab-content').forEach(content => content.classList.remove('active'));

            if (tabName === 'info') {
                document.querySelectorAll('.profile-tab-btn')[0].classList.add('active');
                document.getElementById('ptab-info').classList.add('active');
            } else if (tabName === 'password') {
                document.querySelectorAll('.profile-tab-btn')[1].classList.add('active');
                document.getElementById('ptab-password').classList.add('active');
            } else if (tabName === 'security') {
                document.querySelectorAll('.profile-tab-btn')[2].classList.add('active');
                document.getElementById('ptab-security').classList.add('active');
            }
        }

        function updateProfilePassword() {
            const newPass = document.getElementById('profile-new-pass').value.trim();
            if (!newPass || newPass.length < 6) {
                showBubble('Password baru minimal 6 karakter! ⚠️');
                return;
            }
            currentUser.password = newPass;
            localStorage.setItem('sea_tycoon_user', JSON.stringify(currentUser));
            
            let dbUsers = JSON.parse(localStorage.getItem('sea_tycoon_db') || '[]');
            let idx = dbUsers.findIndex(u => u.email === currentUser.email);
            if (idx !== -1) {
                dbUsers[idx].password = newPass;
                localStorage.setItem('sea_tycoon_db', JSON.stringify(dbUsers));
            }
            document.getElementById('profile-new-pass').value = '';
            showBubble('Password akun berhasil diperbarui! ✨');
        }

        function setActiveNav(name) {
            document.querySelectorAll('.bottom-nav .nav-item').forEach(i => i.classList.remove('active'));
            if(name === 'Beranda') document.getElementById('nav-beranda').classList.add('active');
            else if(name === 'TikTok') document.getElementById('nav-tiktok').classList.add('active');
            else if(name === 'Profile') document.getElementById('nav-profile').classList.add('active');
        }

        function showBubble(message) {
            if(document.getElementById('sidebar').classList.contains('open')) toggleSidebar();
            document.getElementById('bubble-text').innerText = message;
            document.getElementById('bubble-modal').classList.add('active');
        }

        function closeBubble() {
            document.getElementById('bubble-modal').classList.remove('active');
        }

        function openLightbox(imgSrc) {
            document.getElementById('lightbox-img').src = imgSrc;
            document.getElementById('lightbox-modal').classList.add('active');
        }

        function closeLightbox() {
            document.getElementById('lightbox-modal').classList.remove('active');
        }

        function submitInfoUpdate() {
            if (currentUser.role !== 'Owner') {
                showBubble('Hanya Owner yang dapat mengirim Info Update! 👑');
                return;
            }

            const judul = document.getElementById('info-judul').value.trim();
            const isi = document.getElementById('info-isi').value.trim();
            const imageInput = document.getElementById('info-imgs');
            const videoInput = document.getElementById('info-video');

            if (!judul || !isi) {
                showBubble('Judul dan isi pengumuman wajib diisi! ⚠️');
                return;
            }

            let imagesArray = [];
            let videoData = null;

            const processSave = () => {
                let infoList = JSON.parse(localStorage.getItem('sea_tycoon_info_updates') || '[]');
                const newUpdateId = Date.now();
                
                infoList.push({
                    id: newUpdateId,
                    judul: judul,
                    isi: isi,
                    images: imagesArray,
                    video: videoData,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    reactions: { '👍': 0, '❤️': 0, '🔥': 0, '🚀': 0, '👏': 0 },
                    userReacted: {},
                    comments: []
                });
                localStorage.setItem('sea_tycoon_info_updates', JSON.stringify(infoList));

                let globalInbox = JSON.parse(localStorage.getItem('sea_tycoon_global_inbox') || '[]');
                globalInbox.push({
                    id: newUpdateId,
                    title: `Info Update Baru: ${judul}`,
                    message: isi,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    unread: true
                });
                localStorage.setItem('sea_tycoon_global_inbox', JSON.stringify(globalInbox));

                document.getElementById('info-judul').value = '';
                document.getElementById('info-isi').value = '';
                document.getElementById('info-imgs').value = '';
                document.getElementById('info-video').value = '';

                showBubble('Info Update berhasil disiarkan ke semua user! ✨');
                openInfoUpdateWithLoader();
            };

            if (videoInput.files.length > 0) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    videoData = e.target.result;
                    if (imageInput.files.length > 0) {
                        processImagesAndSave(imageInput.files, processSave, imagesArray);
                    } else {
                        processSave();
                    }
                };
                reader.readAsDataURL(videoInput.files[0]);
            } else if (imageInput.files.length > 0) {
                processImagesAndSave(imageInput.files, processSave, imagesArray);
            } else {
                processSave();
            }
        }

        function processImagesAndSave(files, callback, imagesArray) {
            let processed = 0;
            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imagesArray.push(e.target.result);
                    processed++;
                    if (processed === files.length) callback();
                };
                reader.readAsDataURL(files[i]);
            }
        }

        function renderInfoUpdateFeed() {
            const wrapper = document.getElementById('info-update-feed-wrapper');
            let infoList = JSON.parse(localStorage.getItem('sea_tycoon_info_updates') || '[]');

            if (infoList.length === 0) {
                wrapper.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px;">Belum ada info update dari owner.</div>`;
                return;
            }

            let html = '';
            infoList.reverse().forEach(item => {
                let reactionsHtml = '';
                const emojis = ['👍', '❤️', '🔥', '🚀', '👏'];
                emojis.forEach(emoji => {
                    let count = item.reactions[emoji] || 0;
                    let hasReacted = item.userReacted && item.userReacted[currentUser.fullname] === emoji;
                    reactionsHtml += `
                        <button class="react-btn ${hasReacted ? 'reacted' : ''}" onclick="reactInfoUpdate('${item.id}', '${emoji}')">
                            ${emoji} <span>${count}</span>
                        </button>
                    `;
                });

                let mediaHtml = '';
                if (item.images && item.images.length > 0) {
                    mediaHtml += `<div class="channel-images-grid">`;
                    item.images.forEach(imgSrc => {
                        mediaHtml += `
                            <div class="channel-img-wrapper" onclick="openLightbox('${imgSrc}')">
                                <img src="${imgSrc}" alt="Foto Update">
                            </div>
                        `;
                    });
                    mediaHtml += `</div>`;
                }

                if (item.video) {
                    mediaHtml += `
                        <div class="channel-video-wrapper">
                            <video controls src="${item.video}"></video>
                        </div>
                    `;
                }

                let commentsHtml = '';
                if (item.comments && item.comments.length > 0) {
                    item.comments.forEach(com => {
                        commentsHtml += `
                            <div class="comment-bubble">
                                <b>@${com.username}</b>
                                <span>${com.text}</span>
                            </div>
                        `;
                    });
                } else {
                    commentsHtml = `<span style="font-size: 11px; color: var(--text-muted); text-align: center; padding: 4px;">Belum ada ulasan/komentar.</span>`;
                }

                let canDelete = (currentUser.role === 'Owner');

                html += `
                    <div class="channel-card">
                        <div class="channel-header-info">
                            <span>Dari : <b>@Owner Official</b></span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span>${item.time}</span>
                                ${canDelete ? `<button class="delete-post-btn" onclick="deleteInfoUpdate('${item.id}')">Hapus</button>` : ''}
                            </div>
                        </div>
                        <div class="channel-title">${item.judul}</div>
                        <div class="channel-body-text">${item.isi}</div>
                        ${mediaHtml}
                        <div class="reactions-wrapper">
                            ${reactionsHtml}
                        </div>
                        <div class="comments-section">
                            <span style="font-size: 11px; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">Ulasan & Balasan User:</span>
                            <div class="comments-list">
                                ${commentsHtml}
                            </div>
                            <div class="comment-input-row">
                                <input type="text" id="comment-input-${item.id}" placeholder="Tulis balasan atau ulasan...">
                                <button onclick="sendInfoComment('${item.id}')">Kirim</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            wrapper.innerHTML = html;
        }

        function reactInfoUpdate(id, emoji) {
            let infoList = JSON.parse(localStorage.getItem('sea_tycoon_info_updates') || '[]');
            let item = infoList.find(i => i.id == id);
            if (!item) return;

            if (!item.userReacted) item.userReacted = {};
            let prevReact = item.userReacted[currentUser.fullname];

            if (prevReact === emoji) {
                item.reactions[emoji]--;
                delete item.userReacted[currentUser.fullname];
            } else {
                if (prevReact) item.reactions[prevReact]--;
                item.reactions[emoji] = (item.reactions[emoji] || 0) + 1;
                item.userReacted[currentUser.fullname] = emoji;
            }

            localStorage.setItem('sea_tycoon_info_updates', JSON.stringify(infoList));
            renderInfoUpdateFeed();
        }

        function sendInfoComment(id) {
            const input = document.getElementById(`comment-input-${id}`);
            const text = input.value.trim();
            if (!text) return;

            let infoList = JSON.parse(localStorage.getItem('sea_tycoon_info_updates') || '[]');
            let item = infoList.find(i => i.id == id);
            if (!item) return;

            if (!item.comments) item.comments = [];
            item.comments.push({
                username: currentUser.fullname,
                text: text,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });

            localStorage.setItem('sea_tycoon_info_updates', JSON.stringify(infoList));
            input.value = '';
            renderInfoUpdateFeed();
        }

        function deleteInfoUpdate(id) {
            if (!confirm("Hapus info update ini?")) return;
            let infoList = JSON.parse(localStorage.getItem('sea_tycoon_info_updates') || '[]');
            infoList = infoList.filter(i => i.id != id);
            localStorage.setItem('sea_tycoon_info_updates', JSON.stringify(infoList));
            showBubble('Info Update berhasil dihapus! 🗑️');
            renderInfoUpdateFeed();
        }

        function submitKenangan() {
            const judul = document.getElementById('kenangan-judul').value.trim();
            const isi = document.getElementById('kenangan-isi').value.trim();
            const fileInput = document.getElementById('kenangan-imgs');

            if (!judul || !isi) {
                showBubble('Judul dan kenangan wajib diisi! ⚠️');
                return;
            }

            const files = fileInput.files;
            let imagesArray = [];

            if (files.length > 0) {
                processImagesAndSave(files, () => saveKenanganData(judul, isi, imagesArray), imagesArray);
            } else {
                saveKenanganData(judul, isi, []);
            }
        }

        function saveKenanganData(judul, isi, images) {
            let kenanganList = JSON.parse(localStorage.getItem('sea_tycoon_kenangan') || '[]');
            kenanganList.push({
                id: Date.now(),
                from: currentUser.fullname,
                judul: judul,
                kenangan: isi,
                images: images,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                reactions: { '😂': 0, '❤️': 0, '👍': 0, '🔥': 0, '👏': 0 },
                userReacted: {}
            });
            localStorage.setItem('sea_tycoon_kenangan', JSON.stringify(kenanganList));
            document.getElementById('kenangan-judul').value = '';
            document.getElementById('kenangan-isi').value = '';
            document.getElementById('kenangan-imgs').value = '';
            showBubble('Kenangan berhasil dibagikan ke saluran! ✨');
            openMenu('lihat-kenangan');
        }

        function renderKenanganFeed() {
            const wrapper = document.getElementById('kenangan-feed-wrapper');
            let kenanganList = JSON.parse(localStorage.getItem('sea_tycoon_kenangan') || '[]');

            if (kenanganList.length === 0) {
                wrapper.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px;">Belum ada kenangan di saluran ini.</div>`;
                return;
            }

            let html = '';
            kenanganList.reverse().forEach(item => {
                let reactionsHtml = '';
                const emojis = ['😂', '❤️', '👍', '🔥', '👏'];
                emojis.forEach(emoji => {
                    let count = item.reactions[emoji] || 0;
                    let hasReacted = item.userReacted && item.userReacted[currentUser.fullname] === emoji;
                    reactionsHtml += `
                        <button class="react-btn ${hasReacted ? 'reacted' : ''}" onclick="reactKenangan('${item.id}', '${emoji}')">
                            ${emoji} <span>${count}</span>
                        </button>
                    `;
                });

                let imagesHtml = '';
                if (item.images && item.images.length > 0) {
                    imagesHtml += `<div class="channel-images-grid">`;
                    item.images.forEach(imgSrc => {
                        imagesHtml += `
                            <div class="channel-img-wrapper" onclick="openLightbox('${imgSrc}')">
                                <img src="${imgSrc}" alt="Foto Kenangan">
                            </div>
                        `;
                    });
                    imagesHtml += `</div>`;
                }

                let canDelete = (currentUser.role === 'Owner' || item.from === currentUser.fullname);

                html += `
                    <div class="channel-card">
                        <div class="channel-header-info">
                            <span>Dari : <b>@${item.from}</b></span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span>${item.time}</span>
                                ${canDelete ? `<button class="delete-post-btn" onclick="deleteKenangan('${item.id}')">Hapus</button>` : ''}
                            </div>
                        </div>
                        <div class="channel-title">Judul : ${item.judul}</div>
                        <div class="channel-body-text">Kenangan : ${item.kenangan}</div>
                        ${imagesHtml}
                        <div class="reactions-wrapper">
                            ${reactionsHtml}
                        </div>
                    </div>
                `;
            });
            wrapper.innerHTML = html;
        }

        function reactKenangan(id, emoji) {
            let kenanganList = JSON.parse(localStorage.getItem('sea_tycoon_kenangan') || '[]');
            let item = kenanganList.find(k => k.id == id);
            if (!item) return;

            if (!item.userReacted) item.userReacted = {};
            let prevReact = item.userReacted[currentUser.fullname];

            if (prevReact === emoji) {
                item.reactions[emoji]--;
                delete item.userReacted[currentUser.fullname];
            } else {
                if (prevReact) item.reactions[prevReact]--;
                item.reactions[emoji] = (item.reactions[emoji] || 0) + 1;
                item.userReacted[currentUser.fullname] = emoji;
            }

            localStorage.setItem('sea_tycoon_kenangan', JSON.stringify(kenanganList));
            renderKenanganFeed();
        }

        function deleteKenangan(id) {
            if (!confirm("Apakah Anda yakin ingin menghapus kenangan ini?")) return;
            let kenanganList = JSON.parse(localStorage.getItem('sea_tycoon_kenangan') || '[]');
            kenanganList = kenanganList.filter(k => k.id != id);
            localStorage.setItem('sea_tycoon_kenangan', JSON.stringify(kenanganList));
            showBubble('Kenangan berhasil dihapus! 🗑️');
            renderKenanganFeed();
        }

        function submitCerita() {
            const isi = document.getElementById('cerita-isi').value.trim();
            if (!isi) {
                showBubble('Isi cerita wajib diisi! ⚠️');
                return;
            }

            let ceritaList = JSON.parse(localStorage.getItem('sea_tycoon_cerita') || '[]');
            ceritaList.push({
                id: Date.now(),
                from: currentUser.fullname,
                cerita: isi,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                reactions: { '❤️': 0, '🔥': 0, '😢': 0, '👏': 0, '✨': 0 },
                userReacted: {}
            });
            localStorage.setItem('sea_tycoon_cerita', JSON.stringify(ceritaList));
            document.getElementById('cerita-isi').value = '';
            showBubble('Cerita berhasil dibagikan ke saluran! ✨');
            openMenu('lihat-cerita');
        }

        function renderCeritaFeed() {
            const wrapper = document.getElementById('cerita-feed-wrapper');
            let ceritaList = JSON.parse(localStorage.getItem('sea_tycoon_cerita') || '[]');

            if (ceritaList.length === 0) {
                wrapper.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px;">Belum ada cerita di saluran ini.</div>`;
                return;
            }

            let html = '';
            ceritaList.reverse().forEach(item => {
                let reactionsHtml = '';
                const emojis = ['❤️', '🔥', '😢', '👏', '✨'];
                emojis.forEach(emoji => {
                    let count = item.reactions[emoji] || 0;
                    let hasReacted = item.userReacted && item.userReacted[currentUser.fullname] === emoji;
                    reactionsHtml += `
                        <button class="react-btn ${hasReacted ? 'reacted' : ''}" onclick="reactCerita('${item.id}', '${emoji}')">
                            ${emoji} <span>${count}</span>
                        </button>
                    `;
                });

                let canDelete = (currentUser.role === 'Owner' || item.from === currentUser.fullname);

                html += `
                    <div class="channel-card">
                        <div class="channel-header-info">
                            <span>Dari : <b>@${item.from}</b></span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span>${item.time}</span>
                                ${canDelete ? `<button class="delete-post-btn" onclick="deleteCerita('${item.id}')">Hapus</button>` : ''}
                            </div>
                        </div>
                        <div class="channel-body-text">${item.cerita}</div>
                        <div class="reactions-wrapper">
                            ${reactionsHtml}
                        </div>
                    </div>
                `;
            });
            wrapper.innerHTML = html;
        }

        function reactCerita(id, emoji) {
            let ceritaList = JSON.parse(localStorage.getItem('sea_tycoon_cerita') || '[]');
            let item = ceritaList.find(c => c.id == id);
            if (!item) return;

            if (!item.userReacted) item.userReacted = {};
            let prevReact = item.userReacted[currentUser.fullname];

            if (prevReact === emoji) {
                item.reactions[emoji]--;
                delete item.userReacted[currentUser.fullname];
            } else {
                if (prevReact) item.reactions[prevReact]--;
                item.reactions[emoji] = (item.reactions[emoji] || 0) + 1;
                item.userReacted[currentUser.fullname] = emoji;
            }

            localStorage.setItem('sea_tycoon_cerita', JSON.stringify(ceritaList));
            renderCeritaFeed();
        }

        function deleteCerita(id) {
            if (!confirm("Apakah Anda yakin ingin menghapus cerita ini?")) return;
            let ceritaList = JSON.parse(localStorage.getItem('sea_tycoon_cerita') || '[]');
            ceritaList = ceritaList.filter(c => c.id != id);
            localStorage.setItem('sea_tycoon_cerita', JSON.stringify(ceritaList));
            showBubble('Cerita berhasil dihapus! 🗑️');
            renderCeritaFeed();
        }

        function submitUserRequest() {
            const message = document.getElementById('req-message').value.trim();
            const fileInput = document.getElementById('req-image');

            if (!message && fileInput.files.length === 0) {
                showBubble('Pesan request wajib diisi! ⚠️');
                return;
            }

            const processSubmit = (imgData) => {
                let requests = JSON.parse(localStorage.getItem('sea_tycoon_requests') || '[]');
                requests.push({
                    id: Date.now(),
                    username: currentUser.fullname,
                    email: currentUser.email,
                    message: message || '(Lampiran Gambar)',
                    image: imgData || null,
                    reply: null,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                });
                localStorage.setItem('sea_tycoon_requests', JSON.stringify(requests));
                document.getElementById('req-message').value = '';
                fileInput.value = '';
                showBubble('Request berhasil dikirim ke Owner! ✨');
                checkInboxBadge();
            };

            if (fileInput.files.length > 0) {
                const reader = new FileReader();
                reader.onload = (e) => processSubmit(e.target.result);
                reader.readAsDataURL(fileInput.files[0]);
            } else {
                processSubmit(null);
            }
        }

        function renderUserInbox() {
            const wrapper = document.getElementById('user-inbox-wrapper');
            let globalInbox = JSON.parse(localStorage.getItem('sea_tycoon_global_inbox') || '[]');
            let requests = JSON.parse(localStorage.getItem('sea_tycoon_requests') || '[]');
            let userReqs = requests.filter(r => r.username === currentUser.fullname);

            let html = '';

            if (globalInbox.length > 0) {
                globalInbox.reverse().forEach(info => {
                    html += `
                        <div class="inbox-item-bubble" style="border-color: #38bdf8;">
                            <div class="inbox-avatar-circle" style="background: var(--accent-gradient);">📢</div>
                            <div class="inbox-content-box">
                                <b>${info.title}</b>
                                <p>${info.message}</p>
                                <span>${info.time}</span>
                            </div>
                        </div>
                    `;
                });
            }

            if (userReqs.length > 0) {
                userReqs.reverse().forEach(req => {
                    html += `
                        <div class="inbox-item-bubble">
                            <div class="inbox-avatar-circle">📤</div>
                            <div class="inbox-content-box">
                                <b>Request Anda:</b>
                                <p>${req.message}</p>
                                ${req.image ? `<img src="${req.image}" class="inbox-img-preview">` : ''}
                                <span>${req.time}</span>
                                ${req.reply ? `<div class="reply-box-owner">👑 <b>Balasan Owner:</b> ${req.reply}</div>` : `<span style="color: #f59e0b;">Menunggu balasan...</span>`}
                            </div>
                        </div>
                    `;
                });
            }

            if (html === '') {
                html = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">Belum ada pesan di kotak masuk.</div>`;
            }

            wrapper.innerHTML = html;
            localStorage.setItem('sea_tycoon_inbox_read', 'true');
            checkInboxBadge();
        }

        function checkInboxBadge() {
            let globalInbox = JSON.parse(localStorage.getItem('sea_tycoon_global_inbox') || '[]');
            let requests = JSON.parse(localStorage.getItem('sea_tycoon_requests') || '[]');
            if (!currentUser) return;
            let userReqs = requests.filter(r => r.username === currentUser.fullname && r.reply);
            let hasUnreadGlobal = globalInbox.length > 0 && localStorage.getItem('sea_tycoon_inbox_read') !== 'true';

            document.getElementById('inbox-badge-dot').style.display = (userReqs.length > 0 || hasUnreadGlobal) ? 'block' : 'none';
        }

        function renderOwnerRequests() {
            const wrapper = document.getElementById('owner-requests-wrapper');
            let requests = JSON.parse(localStorage.getItem('sea_tycoon_requests') || '[]');

            if (requests.length === 0) {
                wrapper.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px;">Belum ada request masuk.</div>`;
                return;
            }

            let html = '';
            requests.reverse().forEach(req => {
                html += `
                    <div class="song-card">
                        <div class="song-info">
                            <h3>👤 @${req.username}</h3>
                            <span>${req.time} | ${req.email}</span>
                        </div>
                        <p style="font-size: 13px; margin-top: 4px;">${req.message}</p>
                        ${req.image ? `<img src="${req.image}" style="max-width: 100%; max-height: 160px; border-radius: 12px; margin-top: 6px; object-fit: cover;">` : ''}
                        
                        ${req.reply ? `<div class="reply-box-owner" style="margin-top: 8px;">👑 <b>Balasan:</b> ${req.reply}</div>` : `
                            <div style="display: flex; gap: 8px; margin-top: 8px;">
                                <input type="text" id="reply-input-${req.id}" placeholder="Balas user..." style="flex:1; padding:10px 14px; background:var(--bg-main); border:1px solid var(--border-color); border-radius:50px; color:var(--text-color); font-size:12px; outline:none;">
                                <button onclick="sendOwnerReply('${req.id}')" style="background:var(--accent-gradient); border:none; color:#0f172a; padding:10px 18px; border-radius:50px; font-weight:800; font-size:12px; cursor:pointer;">Kirim</button>
                            </div>
                        `}
                    </div>
                `;
            });
            wrapper.innerHTML = html;
        }

        function sendOwnerReply(reqId) {
            const input = document.getElementById(`reply-input-${reqId}`);
            const replyText = input.value.trim();
            if (!replyText) {
                showBubble('Pesan balasan wajib diisi! ⚠️');
                return;
            }

            let requests = JSON.parse(localStorage.getItem('sea_tycoon_requests') || '[]');
            let req = requests.find(r => r.id == reqId);
            if (req) {
                req.reply = replyText;
                localStorage.setItem('sea_tycoon_requests', JSON.stringify(requests));
                showBubble('Balasan berhasil dikirim ke user! ✨');
                renderOwnerRequests();
            }
        }

        function saveNewSong() {
            const title = document.getElementById('input-song-title').value.trim();
            const url = document.getElementById('input-song-url').value.trim();

            if (!title || !url) {
                showBubble('Judul lagu dan URL audio wajib diisi! ⚠️');
                return;
            }

            let songs = JSON.parse(localStorage.getItem('sea_tycoon_songs') || '[]');
            songs.push({ id: Date.now(), title: title, url: url });
            localStorage.setItem('sea_tycoon_songs', JSON.stringify(songs));

            document.getElementById('input-song-title').value = '';
            document.getElementById('input-song-url').value = '';
            showBubble('Lagu berhasil ditambahkan ke daftar! 🎵');
            openMenu('tempat-lagu');
        }

        function renderSongList() {
            const wrapper = document.getElementById('song-list-wrapper');
            let songs = JSON.parse(localStorage.getItem('sea_tycoon_songs') || '[]');

            if (songs.length === 0) {
                wrapper.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px;">Belum ada lagu yang tersedia.</div>`;
                return;
            }

            let html = '';
            songs.forEach(song => {
                html += `
                    <div class="song-card">
                        <div class="song-info">
                            <h3>${song.title}</h3>
                            <span>Audio Stream Player</span>
                        </div>
                        <div class="song-player-controls">
                            <button class="play-song-btn" id="play-btn-${song.id}" onclick="togglePlaySong('${song.id}', '${song.url}')">▶</button>
                            <audio id="audio-${song.id}" src="${song.url}" preload="none"></audio>
                            <div class="volume-control">
                                <span>Vol:</span>
                                <input type="range" min="0" max="1" step="0.1" value="1" onchange="changeVolume('${song.id}', this.value)">
                            </div>
                        </div>
                    </div>
                `;
            });
            wrapper.innerHTML = html;
        }

        let activeAudio = null;
        let activePlayBtn = null;

        function togglePlaySong(id, url) {
            const audio = document.getElementById(`audio-${id}`);
            const btn = document.getElementById(`play-btn-${id}`);

            if (activeAudio && activeAudio !== audio) {
                activeAudio.pause();
                if (activePlayBtn) activePlayBtn.innerText = '▶';
            }

            if (audio.paused) {
                audio.play().then(() => {
                    btn.innerText = '⏸';
                    activeAudio = audio;
                    activePlayBtn = btn;
                }).catch(e => {
                    showBubble('Gagal memutar audio dari URL tersebut! ⚠️');
                });
            } else {
                audio.pause();
                btn.innerText = '▶';
                activeAudio = null;
                activePlayBtn = null;
            }

            audio.onended = () => {
                btn.innerText = '▶';
                activeAudio = null;
                activePlayBtn = null;
            };
        }

        function changeVolume(id, val) {
            const audio = document.getElementById(`audio-${id}`);
            if (audio) audio.volume = val;
        }
    </script>
</body>
</html>
