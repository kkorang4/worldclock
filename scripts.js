function updateTime() {
    const clocks = [
        { elementId: 'time1', dateId: 'date1', weekdayId: 'weekday1', timeZone: 'Pacific/Auckland' },
		{ elementId: 'time2', dateId: 'date2', weekdayId: 'weekday2', timeZone: 'Australia/Sydney' },
        { elementId: 'time3', dateId: 'date3', weekdayId: 'weekday3', timeZone: 'Asia/Tokyo' },
        { elementId: 'time4', dateId: 'date4', weekdayId: 'weekday4', timeZone: 'Asia/Hong_Kong' },
        { elementId: 'time5', dateId: 'date5', weekdayId: 'weekday5', timeZone: 'America/New_York' },
		{ elementId: 'time6', dateId: 'date6', weekdayId: 'weekday6', timeZone: 'America/Los_Angeles' },
		{ elementId: 'time7', dateId: 'date7', weekdayId: 'weekday7', timeZone: 'Pacific/Rarotonga' }
    ];

    clocks.forEach(clock => {
        const now = new Date();
        
        // Format options for time
		// remove .replace and after if need to remove blinking
        const timeOptions = { hour: '2-digit', minute: '2-digit', timeZone: clock.timeZone, hour12: false };
        const timeString = now.toLocaleTimeString('en-NZ', timeOptions).replace(":", "<span class='blink'>:</span>");
        
        // Format options for weekday
        const weekdayOptions = { weekday: 'long', timeZone: clock.timeZone };
        const weekdayString = now.toLocaleDateString('en-NZ', weekdayOptions);
        
        //const dateOptions = { day: 'numeric', month: 'short', timeZone: clock.timeZone };
        //const dateString = now.toLocaleDateString('en-NZ', dateOptions);
                
		// Extract hours from timeString
        const hours = parseInt(timeString.slice(0, 2), 10);
        
        // Set the color based on before or after noon
        let colorClass = '';
        if (hours >= 7 && hours < 18) {
            colorClass = 'am-time';
			weekdayColorClass = 'weekday-daytime'; // Add a class for daytime weekday
            document.getElementById(`clock${clock.elementId.slice(-1)}`).classList.add('daytime');
        } else {
            colorClass = 'pm-time';
			weekdayColorClass = 'weekday-nighttime'; // Add a class for nighttime weekday
            document.getElementById(`clock${clock.elementId.slice(-1)}`).classList.remove('daytime');
        }
		
        // Update the time element
		// change innterHTML to textContent if need to remove blinking
        const timeElement = document.getElementById(clock.elementId);
        timeElement.innerHTML = timeString;
        // Apply color class to time element
        timeElement.className = 'time ' + colorClass;
		
        // Update the weekday element
        const weekdayElement = document.getElementById(clock.weekdayId);
        weekdayElement.textContent = weekdayString;
		weekdayElement.className = 'weekday ' + weekdayColorClass; // Apply the weekday color class
    });
}

setInterval(updateTime, 1000);
updateTime();

//   'Australia/Melbourne',
//   'Australia/Sydney',
//   'Asia/Dubai',
//   'Asia/Seoul',
//   'Asia/Hong_Kong',
//   'Asia/Tokyo',
//   'Asia/Manila',
//   'Asia/Singapore',
//   'Asia/Taipei',
//   'Asia/Shanghai',
//   'Pacific/Honolulu',
//   'Pacific/Auckland',
//   'Pacific/Rarotonga',
//   'Pacific/Fiji',
//   'America/New_York',
//   'America/Chicago',
//   'America/Los_Angeles',
//   'Europe/London',
//   'Europe/Berlin',
//   'Europe/Madrid',
//   'Europe/Zurich',//
