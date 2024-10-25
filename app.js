// Mobile Menu List
document.getElementById('open_menu').addEventListener('click', function () {
        document.getElementById('mobile_menu').classList.remove('hidden');
        document.getElementById('close_menu').classList.remove('hidden');
});
document.getElementById('close_menu').addEventListener('click', function () {
    document.getElementById('mobile_menu').classList.add('hidden');
    document.getElementById('close_menu').classList.add('hidden');
});

 function selectSeat(event) {
    event.classList.add('bg-green-500', 'text-white')
 }
