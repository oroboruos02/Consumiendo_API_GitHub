function getRepositories() {
    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}/repos`;

    
    async function fetchData(url) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error fetching repositories: ${response.status} - ${response.statusText}`);
          }
      
          const repositories = await response.json();
          displayRepositories(repositories);
        } catch (error) {
          console.error('Error fetching repositories:', error);
        }
      }
      
      // Llamo a la función fetchData
      fetchData(url);
      
    
/*     fetch(url)
        .then(response => response.json())
        .then(repositories => displayRepositories(repositories))
        .catch(error => console.error('Error fetching repositories:', error)); */
}

function displayRepositories(repositories) {
    const repositoriesDiv = document.getElementById('repositories');
    repositoriesDiv.innerHTML = ''; // Limpiar el contenido anterior

    if (repositories.length === 0) {
        repositoriesDiv.innerHTML = 'No repositories found.';
        return;
    }

    const ul = document.createElement('ul');

    repositories.forEach(repo => {
        const li = document.createElement('li');
        li.textContent = repo.name;
        ul.appendChild(li);
    });

    repositoriesDiv.appendChild(ul);
}