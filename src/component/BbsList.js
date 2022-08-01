import React, {useState, useEffect} from "react";


const BbsList = () => {
    const [noticeList, setNoticeList] =useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/public/testNotice.json', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setNoticeList(data);
        })
    }, [])
}