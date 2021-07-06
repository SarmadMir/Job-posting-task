import React, { useEffect } from 'react'
import axios from "axios"
let url = 'https://jsonplaceholder.typicode.com/users'

export default function Api() {

    useEffect(() => {
        // Task 1
        apiCall()
        // Task 2
        sendData()
    }, [])

    function apiCall() {
        axios.get(url)
            .then((res) => {
                console.log("Response from API : ", res)
            })
            .catch((e) => {
                console.log("Error", e)
            })
    }

    function sendData() {
        const data = {
            id: '12345',
            purpose: 'testing'
        }
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        axios
            .post(url, formData)
            .then((res) => {
                if (res.data && res.data.success) {
                    console.log("Success Response : ", res.data)
                } else {
                    console.log("Error Response : ", res.data)
                }
            })
            .catch((e) => {
                console.log("Catch error : ", e);
            });
    }

    return (
        <div>
            API SECTION, view in console
        </div>
    )
}
