  function clearName() {
    if (document.getElementById('nameField').value == 'First and Last Name'){
    document.getElementById('nameField').value = '';
}
}
function resetName() {
    if (document.getElementById('nameField').value == ''){
    document.getElementById('nameField').value = 'First and Last Name';
}
}
function clearPhone() {
    if (document.getElementById('phoneField').value == '123-456-7890'){
    document.getElementById('phoneField').value = '';
}
}
function resetPhone() {
    if (document.getElementById('phoneField').value == ''){
    document.getElementById('phoneField').value = '123-456-7890';
}
}
function clearEmail() {
    if (document.getElementById('emailField').value == 'myemail@gmail.com'){
    document.getElementById('emailField').value = '';
}
}
function resetEmail() {
    if (document.getElementById('emailField').value == ''){
    document.getElementById('emailField').value = 'myemail@gmail.com';
}
}