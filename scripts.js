const IELTS_TOPICS = [
  // Education
  "University education should be free for everyone. To what extent do you agree or disagree?",
  "Some people think students should focus on STEM; others say arts are equally important. Discuss both views and give your opinion.",
  "Online learning will replace classroom learning. Do you agree or disagree?",
  "Exams are a poor measure of a student’s ability. Discuss both sides and give your opinion.",
  "Teachers should be paid based on students’ results. To what extent do you agree?",
  "Children should start formal education at the age of seven. Do you agree or disagree?",
  "Homework should be abolished. Discuss both views and give your opinion.",
  "Studying abroad brings more advantages than disadvantages. Discuss both sides.",
  "Universities should accept equal numbers of male and female students in every subject. Do you agree?",
  "The main purpose of education is to prepare people for the workplace. How far do you agree?",
  // Technology
  "The growth of social media has damaged face-to-face communication. To what extent do you agree?",
  "Artificial intelligence will create more jobs than it destroys. Discuss both sides and give your opinion.",
  "Governments should regulate screen time for children. To what extent do you agree?",
  "Technology has made people less creative. Do you agree or disagree?",
  "Cybersecurity should be taught in schools. Do you agree?",
  "Facial recognition in public spaces should be banned. Discuss.",
  "People rely too much on smartphones. To what extent do you agree?",
  "Space exploration is a waste of resources. Discuss both views.",
  "Digital payments will replace cash completely. Do you agree?",
  "Online privacy is more important than national security. Discuss.",
  // Environment
  "Climate change is the biggest threat facing humanity. Do you agree or disagree?",
  "Plastic bans are effective in reducing pollution. Discuss both sides and give your opinion.",
  "Governments should invest more in public transport than in roads. To what extent do you agree?",
  "Individuals can do little to improve the environment. Do you agree?",
  "The best way to tackle traffic congestion is to increase fuel prices. Discuss.",
  "Countries should be penalized for exceeding carbon limits. Do you agree?",
  "Plant-based diets should be encouraged to protect the environment. Discuss.",
  "Ecotourism brings more harm than good. To what extent do you agree?",
  "Nuclear energy is the answer to the energy crisis. Discuss both sides.",
  "Recycling is not enough; we must reduce consumption. Do you agree?",
  // Health
  "Governments should tax sugary drinks to improve public health. Do you agree?",
  "Mental health should be treated on par with physical health. Discuss.",
  "Public money should be used to promote healthy lifestyles rather than to treat illnesses. To what extent do you agree?",
  "Advertising of fast food to children should be banned. Discuss.",
  "Alternative medicine is not effective and should be discouraged. Do you agree?",
  "Work-life balance is more important than salary. Discuss.",
  "Sports stars are overpaid. Do you agree or disagree?",
  "Universal healthcare should be a basic right. Discuss both views.",
  "The fitness industry does more harm than good. Discuss.",
  "Schools should provide free nutritious lunches. To what extent do you agree?",
  // Society
  "Crime can be reduced with longer prison sentences. Others say education and rehabilitation are better. Discuss both views and give your opinion.",
  "Censorship of the internet is necessary in some cases. Discuss.",
  "Aging populations will cause serious problems for society. Discuss solutions.",
  "Some people think that parents are the best teachers. Do you agree?",
  "Multicultural societies are more creative. To what extent do you agree?",
  "Celebrities should not be role models. Discuss.",
  "Tourism brings more benefits than problems. Discuss both sides.",
  "City life is better than country life. Discuss both views.",
  "Consumerism is damaging our society. Do you agree?",
  "People today are less happy than in the past. Discuss.",
  // Work & Economy
  "Remote work will remain the norm. Do you agree or disagree?",
  "A universal basic income is the best response to automation. Discuss.",
  "Job satisfaction is more important than job security. To what extent do you agree?",
  "Employers should monitor employees’ emails and internet use. Do you agree?",
  "Gig-economy jobs exploit workers. Discuss.",
  "Globalization has more benefits than drawbacks. Discuss both views.",
  "Tourism is a vital source of income but can ruin local cultures. Discuss.",
  "International trade should be fairer rather than freer. Do you agree?",
  "Pay transparency laws will reduce inequality. Discuss.",
  "Internships should be paid. Do you agree?",
  // Culture & Media
  "Traditional culture is being destroyed by global media. Discuss.",
  "Museums and galleries should be free to the public. Do you agree?",
  "Reality TV has a negative impact on society. Discuss.",
  "The government should fund the arts. To what extent do you agree?",
  "Books will be replaced by digital media. Do you agree?",
  "People read fewer books today. Is this a problem?",
  "Cultural appropriation is a serious issue. Discuss.",
  "Public money should not be spent on celebrating historical events. Discuss.",
  "Only local films should receive government subsidies. Do you agree?",
  "Popular culture is more influential than education. Discuss.",
  // Transport & Urban life
  "Cities should adopt car-free zones in centers. Do you agree?",
  "Cycling infrastructure deserves more investment than highways. Discuss.",
  "High-speed rail is worth the cost. Do you agree?",
  "Congestion charges are an effective way to reduce traffic. Discuss.",
  "Short-term rentals (e.g., Airbnb) harm local housing markets. Discuss.",
  "Urban green spaces should be mandatory in new developments. Do you agree?",
  "Public transport should be free. Discuss both sides.",
  "Owning a car should be discouraged in large cities. Do you agree?",
  "Tall buildings are better than low-rise sprawl. Discuss.",
  "Smart cities solve urban problems. Do you agree?",
  // Family & Children
  "Parents should limit children’s screen time. Do you agree?",
  "Children should do unpaid work at home to learn responsibility. Discuss.",
  "Single-sex schools are better for academic achievement. Discuss.",
  "Grandparents play a more important role than before. Do you agree?",
  "Teenagers should work part-time while studying. Discuss.",
  "Parents should be held legally responsible for children’s crimes. Do you agree?",
  "Children should choose their own career paths without parental pressure. Discuss.",
  "Competitive sports are essential in school. Do you agree?",
  "Boarding schools offer better education. Discuss both views.",
  "Young people should volunteer in their communities. Discuss."
];

/************************* Helpers *************************/
const el = id => document.getElementById(id);
function setStatus(msg){ el('status').textContent = msg || ""; }
function bandClass(b){ if (b >= 7.5) return 'good'; if (b >= 6.0) return 'ok'; return 'bad'; }
function chip(label){ const s=document.createElement('span'); s.className='chip'; s.textContent=label; return s; }
function esc(s){ return (s||"").toString().replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }

/************************* Populate topics *************************/
(function initTopics(){
  const sel = el('topicSelect');
  const base = document.createElement('option');
  base.value=""; base.textContent="— Choose an IELTS topic —";
  sel.appendChild(base);
  IELTS_TOPICS.forEach(t=>{ const o=document.createElement('option'); o.value=t; o.textContent=t; sel.appendChild(o); });
})();

/************************* Local storage *************************/
(function restore(){
  const k = localStorage.getItem('gemini_api_key'); if (k) el('apiKey').value = k;
  const m = localStorage.getItem('gemini_model'); if (m) el('modelName').value = m;
})();

/************************* Events *************************/
el('randTopic').addEventListener('click', ()=>{
  const idx = 1 + Math.floor(Math.random() * IELTS_TOPICS.length);
  el('topicSelect').selectedIndex = idx; el('customTopic').value = '';
});
el('useCustom').addEventListener('click', ()=>{ el('topicSelect').selectedIndex = 0; el('customTopic').focus(); });
el('clearBtn').addEventListener('click', ()=>{
  el('essay').value=''; el('customTopic').value='';
  el('overallBand').textContent='–'; el('breakdownChips').innerHTML='';
  ['crit-ta','crit-cc','crit-lr','crit-gra'].forEach(id=>{ const c=el(id); c.dataset.band=""; c.classList.remove('good','ok','bad'); c.querySelector('.content').innerHTML=""; });
  el('inlinePreview').innerHTML=''; el('errorsList').innerHTML=''; el('rawJson').textContent=''; el('refinedEssay').innerHTML=''; setStatus('');
});
el('saveBtn').addEventListener('click', ()=>{
  localStorage.setItem('gemini_api_key', el('apiKey').value.trim());
  localStorage.setItem('gemini_model', el('modelName').value.trim());
  setStatus('✅ API key & model saved locally.');
});

/************************* JSON extraction + repair *************************/
function tryParseJSON(text){
  // 1) Direct parse
  try { return JSON.parse(text); } catch(_){}
  // 2) Code fence ```json ... ```
  const fence = text.match(/```json[\s\S]*?```/i) || text.match(/```[\s\S]*?```/);
  if (fence){
    const inner = fence[0].replace(/```json|```/gi,'').trim();
    try { return JSON.parse(inner); } catch(_){}
  }
  // 3) Greedy first { to last }
  const first = text.indexOf('{');
  const last = text.lastIndexOf('}');
  if (first !== -1 && last !== -1 && last > first){
    const slice = text.slice(first, last+1);
    try { return JSON.parse(slice); } catch(_){}
  }
  // 4) Minimal structural cleanup: remove trailing commas
  const cleaned = text.replace(/,\s*([}\]])/g,'$1');
  try { return JSON.parse(cleaned); } catch(_){}
  throw new Error('Model did not return valid JSON.');
}

/************************* Gemini Call *************************/
async function callGemini({apiKey, model, prompt, maxTokens=2048}) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const body = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.2,
      topP: 0.9,
      maxOutputTokens: Number(maxTokens) || 2048,
      responseMimeType: "application/json"
    }
  };
  const res = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
  if (!res.ok){
    const t = await res.text().catch(()=>res.statusText);
    throw new Error(`Gemini API error ${res.status}: ${t}`);
  }
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  return text;
}

/************************* Prompt Builder *************************/
function buildPrompt({taskType, topic, essay, targetBand}) {
  return `You are an official IELTS Writing examiner. Assess the user's writing according to IELTS public band descriptors.
Return ONLY a valid JSON object. Do not include any text before or after the JSON.

Schema (use these exact keys):
{
  "task": "1" | "2",
  "topic": "string",
  "overall_band": number,                 
  "breakdown": {
    "task_response": { "band": number, "summary": "string", "issues": ["string"], "advice": ["string"] },
    "coherence_cohesion": { "band": number, "summary": "string", "issues": ["string"], "advice": ["string"] },
    "lexical_resource": { "band": number, "summary": "string", "issues": ["string"], "advice": ["string"] },
    "grammatical_range_accuracy": { "band": number, "summary": "string", "issues": ["string"], "advice": ["string"] }
  },
  "inline_annotations": [ { 
    "quote": "exact substring (<=20 words)", 
    "type": "grammar" | "vocabulary" | "cohesion" | "spelling", 
    "reason": "string", 
    "fix": "string" 
} ],
  "grammar_errors": [ { "error": "string", "why": "string", "fix": "string" } ],
  "vocabulary_suggestions": [ { "weak": "string", "better": "string", "why": "string" } ],
  "cohesion_suggestions": [ { "issue": "string", "fix": "string" } ],
  "spelling_errors": [ { "error": "string", "fix": "string" } ],
  "task_specific_advice": "string",
  "refined_essay": "string"
}

Annotation Guidelines:
- For "inline_annotations", find the exact quote from the essay.
- Use the "type" field to categorize the issue:
  - "spelling": A simple spelling mistake.
  - "grammar": An error in sentence structure, tense, punctuation, articles, etc.
  - "vocabulary": A word that is used incorrectly or could be improved (e.g., less common, more precise). This is for word improvements.
  - "cohesion": An issue with linking ideas, sentence flow, or logical connection. This is for making sentences better.
- Populate the detailed error lists ("grammar_errors", "vocabulary_suggestions", "cohesion_suggestions", "spelling_errors") based on these findings.

Scoring rules:
- For Task ${taskType}: assess ${taskType==="1"?"Task Achievement (TA)":"Task Response (TR)"}.
- Use 0–9 bands including .5.
- Be consistent with IELTS descriptors (relevance, clear position, idea development, paragraphing; cohesion; vocabulary range/accuracy; grammar range/accuracy/punctuation).
- Rewrite the user's essay to a Band 9 level, keeping their core ideas but improving structure, vocabulary, and grammar. Place this in the 'refined_essay' field.
- If a target band is provided, add advice to reach that band.
- IMPORTANT: Output MUST be valid JSON only.

User input:
Task: ${taskType}
Target band: ${targetBand || "none"}
Topic: ${topic}

Essay:
"""${essay}"""`;
}

/************************* Renderers *************************/
function setCrit(elId, data){
  const node = document.querySelector('#'+elId);
  const band = Number(data?.band ?? NaN);
  node.dataset.band = isFinite(band) ? band.toFixed(1).replace(/\.0$/,'') : '–';
  node.classList.remove('good','ok','bad');
  if (isFinite(band)) node.classList.add(bandClass(band));
  const html = `
    <div class="badge">Band ${isFinite(band)?band.toFixed(1):'–'}</div>
    <p>${esc(data?.summary || '')}</p>
    ${Array.isArray(data?.issues) && data.issues.length ? `<h4>Key issues</h4><ul>${data.issues.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`:''}
    ${Array.isArray(data?.advice) && data.advice.length ? `<h4>How to improve</h4><ul>${data.advice.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`:''}
  `;
  node.querySelector('.content').innerHTML = html;
}

function renderInline(essay, inline){
  if (!Array.isArray(inline) || inline.length===0){ 
    el('inlinePreview').innerHTML = '<span class="hint">No inline issues provided.</span>'; 
    return; 
  }
  let html = esc(essay);
  inline.forEach(a=>{
    const q = a?.quote || ''; 
    if (!q) return;
    // Add spelling to the valid types
    const type = ['grammar', 'vocabulary', 'cohesion', 'spelling'].includes(a?.type) ? a.type : 'grammar';
    const className = `inline-err inline-err-${type}`;
    const reason = a.reason||'Issue';
    const fix = a.fix||'Fix';
    const title = `Reason: ${reason}\nSuggested Fix: ${fix}`;
    const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
    html = html.replace(re, m=>`<span class="${className}" title="${esc(title)}">${esc(m)}</span>`);
  });
  el('inlinePreview').innerHTML = html;
}

function renderRefinedEssay(text){
  const container = el('refinedEssay');
  if (text && typeof text === 'string' && text.trim() !== '') {
    container.textContent = text;
  } else {
    container.innerHTML = '<span class="hint">No refined essay was provided by the model.</span>';
  }
}

function renderErrors(all){
  const list = el('errorsList'); 
  list.innerHTML = '';
  const items = [];
  // Add spelling errors section
  (all?.spelling_errors||[]).forEach(s=>{ 
    items.push(`<li><b>Spelling:</b> "${esc(s.error)}" → <i>${esc(s.fix)}</i></li>`); 
  });
  (all?.grammar_errors||[]).forEach(g=>{ 
    items.push(`<li><b>Grammar:</b> ${esc(g.error)} <span class="hint">— ${esc(g.why)}</span><br><span class="mono">Fix:</span> ${esc(g.fix)}</li>`); 
  });
  (all?.vocabulary_suggestions||[]).forEach(v=>{ 
    items.push(`<li><b>Vocabulary:</b> "${esc(v.weak)}" → <i>${esc(v.better)}</i> <span class="hint">— ${esc(v.why)}</span></li>`); 
  });
  (all?.cohesion_suggestions||[]).forEach(c=>{ 
    items.push(`<li><b>Cohesion:</b> ${esc(c.issue)} <br><span class="mono">Fix:</span> ${esc(c.fix)}</li>`); 
  });
  list.innerHTML = items.length ? items.join('') : '<li class="hint">No detailed issues returned.</li>';
}

/************************* Main assess flow *************************/
el('assessBtn').addEventListener('click', async ()=>{
  try{
    const apiKey = el('apiKey').value.trim();
    const model = el('modelName').value.trim() || 'gemini-2.5-flash';
    const taskType = "2";
    const topic = el('customTopic').value.trim() || el('topicSelect').value;
    const essay = el('essay').value.trim();
    const targetBand = el('targetBand').value;
    const maxTokens = Number(el('maxTokens').value) || 2048;

    if (!apiKey) return setStatus('🔑 Please enter your Gemini API key.');
    if (!essay) return setStatus('✍️ Please write or paste your essay.');
    if (!topic) return setStatus('🧠 Please choose a topic or write your own.');

    setStatus('⏳ Sending to Gemini…');

    const prompt = buildPrompt({taskType, topic, essay, targetBand});
    const jsonText = await callGemini({apiKey, model, prompt, maxTokens});

    // Parse JSON safely
    let obj = tryParseJSON(jsonText);

    // Minimal validation to avoid undefined crashes
    if (!obj.breakdown) obj.breakdown = {};
    ['task_response','coherence_cohesion','lexical_resource','grammatical_range_accuracy'].forEach(k=>{
      obj.breakdown[k] = obj.breakdown[k] || { band:null, summary:'', issues:[], advice:[] };
    });

    // Overall
    const overall = Number(obj?.overall_band ?? NaN);
    el('overallBand').textContent = isFinite(overall) ? overall.toFixed(1).replace(/\.0$/,'') : '–';

    // Chips
    const bd = obj.breakdown;
    const chips = el('breakdownChips'); chips.innerHTML='';
    const addChip = (label,val)=> chips.appendChild(chip(`${label}: ${isFinite(val)?val.toFixed(1).replace(/\.0$/,''):'–'}`));
    addChip('TR/TA', Number(bd.task_response.band));
    addChip('C&C', Number(bd.coherence_cohesion.band));
    addChip('LR', Number(bd.lexical_resource.band));
    addChip('GRA', Number(bd.grammatical_range_accuracy.band));

    // Criteria sections
    setCrit('crit-ta', bd.task_response);
    setCrit('crit-cc', bd.coherence_cohesion);
    setCrit('crit-lr', bd.lexical_resource);
    setCrit('crit-gra', bd.grammatical_range_accuracy);

    // Inline highlights and lists
    renderInline(essay, obj?.inline_annotations);
    renderErrors(obj);
    renderRefinedEssay(obj?.refined_essay);

    // Raw JSON
    // el('rawJson').textContent = JSON.stringify(obj, null, 2);

    setStatus('✅ Assessment complete.');
  }catch(err){
    console.error(err);
    setStatus('❌ ' + (err?.message || err));
  }
});

/************************* Settings Panel *************************/
const settingsBtn = el('settingsBtn');
const closeSettingsBtn = el('closeSettingsBtn');
const settingsPanel = el('settingsPanel');
settingsBtn.addEventListener('click', () => { settingsPanel.style.display = 'block'; });
closeSettingsBtn.addEventListener('click', () => { settingsPanel.style.display = 'none'; });
