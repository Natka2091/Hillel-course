const a = prompt ('a?', '');
switch (+a) {
    case a === 0:
        alert(0);
        break;
    case a === 1:
        alert(1);
        break;
    case a === 2:
    case a === 3:
        alert ('2,3');
}