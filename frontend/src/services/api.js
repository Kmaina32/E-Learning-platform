const API_BASE_URL = 'http://localhost:5000'; // backend URL

export async function fetchCourses() {
  const response = await fetch(`${API_BASE_URL}/courses`);
  return await response.json();
}

// Add more API calls here
s