import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './LiveDemo.css';

function LiveDemo() {
    const [headerRef, headerVisible] = useScrollReveal();
    const [demoRef, demoVisible] = useScrollReveal({ threshold: 0.1 });
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [status, setStatus] = useState(null); // 'valid' | 'invalid' | null
    const [copied, setCopied] = useState(false);

    const sampleJson = `{"name":"Jordy","role":"Support Developer","tools":[{"name":"Creation Tool","status":"production"},{"name":"Replication Tool","status":"production"}],"skills":["Vue.js","Express.js","SQL"]}`;

    const handleFormat = () => {
        if (!input.trim()) {
            setStatus(null);
            setOutput('');
            return;
        }
        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed, null, 2));
            setStatus('valid');
        } catch {
            setOutput('');
            setStatus('invalid');
        }
    };

    const handleMinify = () => {
        if (!input.trim()) return;
        try {
            const parsed = JSON.parse(input);
            const minified = JSON.stringify(parsed);
            setOutput(minified);
            setStatus('valid');
        } catch {
            setStatus('invalid');
        }
    };

    const handleClear = () => {
        setInput('');
        setOutput('');
        setStatus(null);
        setCopied(false);
    };

    const handleLoadSample = () => {
        setInput(sampleJson);
        setOutput('');
        setStatus(null);
    };

    const handleCopy = async () => {
        if (!output) return;
        try {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = output;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <section id="demo-section">
            <div ref={headerRef} className={`demo-header scroll-reveal ${headerVisible ? 'visible' : ''}`}>
                <span className="section-label">Interactive Proof</span>
                <h2>Try a Tool I Built</h2>
                <p>I build tools that solve problems. Here's a working JSON formatter — paste any JSON to format, validate, or minify it.</p>
            </div>

            <div ref={demoRef} className={`demo-container scroll-reveal ${demoVisible ? 'visible' : ''}`}>
                <div className="demo-tool">
                    <div className="tool-header">
                        <div className="tool-title">
                            <div className="tool-dots">
                                <span className="tool-dot tool-dot-red"></span>
                                <span className="tool-dot tool-dot-yellow"></span>
                                <span className="tool-dot tool-dot-green"></span>
                            </div>
                            <span>json-formatter.js</span>
                        </div>
                        <div className="tool-actions">
                            <button className="tool-btn" onClick={handleLoadSample}>
                                <i className="fa fa-file-code-o"></i> Sample
                            </button>
                            <button className="tool-btn tool-btn--primary" onClick={handleFormat}>
                                <i className="fa fa-indent"></i> Format
                            </button>
                            <button className="tool-btn" onClick={handleMinify}>
                                <i className="fa fa-compress"></i> Minify
                            </button>
                            <button className="tool-btn tool-btn--danger" onClick={handleClear}>
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </div>
                    </div>

                    <div className="tool-body">
                        <div className="tool-panel">
                            <div className="panel-label">Input</div>
                            <textarea
                                className="tool-textarea"
                                value={input}
                                onChange={(e) => {
                                    setInput(e.target.value);
                                    setStatus(null);
                                }}
                                placeholder='Paste your JSON here...'
                                spellCheck="false"
                            />
                        </div>
                        <div className="tool-divider">
                            <i className="fa fa-arrow-right"></i>
                        </div>
                        <div className="tool-panel">
                            <div className="panel-label">
                                Output
                                {status === 'valid' && <span className="status-badge--valid"><i className="fa fa-check"></i> Valid JSON</span>}
                                {status === 'invalid' && <span className="status-badge--invalid"><i className="fa fa-times"></i> Invalid JSON</span>}
                            </div>
                            <div className="tool-output-wrap">
                                <pre className="tool-output">{output || (status === 'invalid' ? 'Invalid JSON — check your syntax' : 'Formatted output will appear here...')}</pre>
                                {output && (
                                    <button className="copy-btn" onClick={handleCopy}>
                                        <i className={`fa ${copied ? 'fa-check' : 'fa-clipboard'}`}></i>
                                        {copied ? 'Copied!' : 'Copy'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="demo-meta">
                    <span><i className="fa fa-code"></i> Built with React &amp; vanilla JS</span>
                    <span><i className="fa fa-bolt"></i> Runs entirely in your browser</span>
                    <span><i className="fa fa-shield"></i> No data sent anywhere</span>
                </div>
            </div>
        </section>
    );
}

export default LiveDemo;
