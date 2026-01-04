const btnLoad = document.getElementById('btn-load')
const userList = document.getElementById('user-list')

btnLoad.addEventListener('click', async () => {
    userList.innerHTML = 'Loading...'
    
    const response = await window.api.fetchUsers()

    userList.innerHTML = ''

    if (response.success) {
        response.data.forEach(user => {
            const div = document.createElement('div')
            div.className = 'user-card'
            div.innerHTML = `<strong>${user.name}</strong><br><small>${user.email}</small>`
            userList.appendChild(div)
        })
    } else {
        userList.innerHTML = `<p style="color:red">Error: ${response.error}</p>`
    }
})