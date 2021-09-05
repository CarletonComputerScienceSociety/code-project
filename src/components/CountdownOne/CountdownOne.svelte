<script lang="ts">
export let datetime;
export let realid;

CountDownTimer(datetime+' 12:00 AM GMT-04:00', 'countdown', 1);
// CountDownTimer('9/1/2019 5:35 PM', 'newcountdown');

function CountDownTimer(dt, id, lol)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            // refresh page???
            // document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);


        if (String(hours).length < 2){
            hours = 0 + String(hours);
        }
        if (String(minutes).length < 2){
            minutes = 0 + String(minutes);
        }
        if (String(seconds).length < 2){
            seconds = 0 + String(seconds);
        }


        var datestr = days + ' days ' +
                      hours + ' hrs ' +
                      minutes + ' mins ' +
                      seconds + ' secs';

       // document.getElementById(id).innerHTML = datestr;

        document.getElementById('days'+realid).innerHTML = days.toString();
        document.getElementById('hours'+realid).innerHTML = hours.toString();
        document.getElementById('minutes'+realid).innerHTML = minutes.toString();
        document.getElementById('seconds2'+realid).innerHTML = seconds.toString();
    }

    timer = setInterval(showRemaining, 1000);
}

</script>

<div class="countdown" id="countdown">
    <div>
        <div id={"days" + realid} class="countdown-item-bold">0</div>
        <div class="countdown-item">days</div>
    </div>
    <div>
        <div id={"hours" + realid} class="countdown-item-bold">00</div>
        <div class="countdown-item">hours</div>
    </div>
    <div>
        <div id={"minutes" + realid} class="countdown-item-bold">00</div>
        <div class="countdown-item">mins</div>
    </div>
    <div>
        <div id={"seconds2" + realid} class="countdown-item-bold">00</div>
        <div class="countdown-item">secs</div>
    </div>
</div>

<style>
    .countdown {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        margin: auto;
        width: 100%;
        max-width: 500px;
    }

    .countdown-item-bold {
        font-size: 2rem;
    }

</style>
