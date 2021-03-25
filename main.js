// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// GET REQUEST
async function getTodos() {
  try{
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`);
  showOutput(response)
  }catch(error) {
    console.log("error", error)
  }
}

// POST REQUEST
async function addTodo() {
  try{
  const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
    title: 'New Todo',
    completed: false
  })
  showOutput(response)
}catch(error){
  console.log('error, error')
}
}

// PUT/PATCH REQUEST
// Put removes existing json and replaces it. Patch just updates nessecary keys

async function updateTodo() {
  try{
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/1`, {
      title: 'Updated Todo',
      completed: true
    })
    showOutput(response)
  }catch(error){
    console.log('error, error')
  }
}

// DELETE REQUEST
async function removeTodo() {
  try{
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/1`, {
      title: 'Updated Todo',
      completed: true
    })
    showOutput(response)
  }catch(error){
    console.log('error, error')
  }
}

// SIMULTANEOUS DATA
function getData() {
 
}

// CUSTOM HEADERS
function customHeaders() {
  
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  
}

// ERROR HANDLING
function errorHandling() {
  
}

// CANCEL TOKEN
function cancelToken() {
  
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  
);

// AXIOS INSTANCE
const axiosInstance = axios.create({
  // Other custom settings
  baseURL: 'https://jsonplaceholder.typicode.com'
});
// axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
