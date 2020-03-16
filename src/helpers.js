/* eslint-disable */

// Minified debouncer
export function debounce(a,b,c){var d,e;return function(){function h(){d=null,c||(e=a.apply(f,g))}var f=this,g=arguments;return clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e}}

// Extract from date from temporal to use for sorting data by date
export function getFromDate(temporal){
    const fromTo = (temporal.split('/'))
    const dateFrom = fromTo[0];
    const separateTime = dateFrom.split('T')
    const YMD = separateTime[0]
    return new Date(YMD);
}

export function setAccessLevelIcon(accessLevel){
    return accessLevel === 'public' ? 'fa-lock-open' : 'fa-lock';
}

/* 
    Convert temporal into more readable format. Strips H,M,S 
    Expects: string - temporal in format: 'YYYY-MM-DDTHH:MM:SS/YYYY-MM-DDTHH:MM:SS'
    Returns: string - format: DD-MM-YY to DD-MM-YY
*/
export function formatDateRangeUK(temporal){
    const fromTo = (temporal.split('/'))
    const dateFrom = format(fromTo[0]);
    const dateTo = format(fromTo[1]);

    function format(item){ 
        const separateTime = item.split('T')
        const YMD = separateTime[0].split('-')
        return `${YMD[2]}-${YMD[1]}-${YMD[0]}`;
    }
    return dateFrom + ' to ' + dateTo;
}



