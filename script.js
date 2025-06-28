var gun = Gun('https://gun-manhattan.herokuapp.com/gun');
var toggleState = gun.get('toggle-state');

document.getElementById('toggle').addEventListener('change', function() {
    toggleState.put({isOn: this.checked});
});

toggleState.on(function(data) {
    if (data && data.isOn) {
        document.querySelector('.dot').style.backgroundColor = 'red';
        document.getElementById('toggle').checked = true;
    } else {
        document.querySelector('.dot').style.backgroundColor = 'black';
        document.getElementById('toggle').checked = false;
    }
});
