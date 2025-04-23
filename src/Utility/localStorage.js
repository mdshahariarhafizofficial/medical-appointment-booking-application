export const getDataFromLocalStorage = ()=> {
    const bookings = localStorage.getItem('booking');
    if (bookings) {
        return JSON.parse(bookings)
    }else{
        return []
    }
}

export const addDataToLocalStorage = (info)=>{
    const bookings = getDataFromLocalStorage();
    const isExist = bookings.find(b => b.id === info.id);
    if (isExist) {  
        alert('already added')  
    }else{
        bookings.push(info)
    }
    localStorage.setItem('booking', JSON.stringify(bookings))
}

