const login = prompt ('Who is there?', '');
if (login === 'Admin') {
    const password = prompt ('Password', '');
    if (password === 'TheMaster') {
        alert ('Welcome');
    } else if (password === '') {
        alert ('Canceled');
    } else {
        alert ('Wrong password');
    }
} else if (login === '') {
    alert ('Canseled');
} else {
    alert ('I do not know you');
}