/* eslint-disable */

// Minified debouncer
export function debounce(a,b,c){var d,e;return function(){function h(){d=null,c||(e=a.apply(f,g))}var f=this,g=arguments;return clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e}}

export function formatDate(date){
    
    //todo
    return;
}

export function setAccessLevelIcon(accessLevel){
    return accessLevel === 'public' ? 'fa-lock-open' : 'fa-lock';
}

/* 
    Convert temporal into more readable format. Strips H,M,S 
    Expects: string - temporal in format: 'YYYY-MM-DDTHH:MM:SS/YYYY-MM-DDTHH:MM:SS'
    Returns: string - format: DD-MM-YY to DD-MM-YY
*/
export function formatDateRangeUK(date){
    const fromTo = (date.split('/'))
    const dateFrom = format(fromTo[0]);
    const dateTo = format(fromTo[1]);

    function format(item){
        const separateTime = item.split('T')
        const YMD = separateTime[0].split('-')
        return `${YMD[2]}-${YMD[1]}-${YMD[0]}`;
    }
    return dateFrom + ' to ' + dateTo;
}


