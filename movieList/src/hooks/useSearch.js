import { useState } from "react";

export default function useSearch(data) {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const onChange = (e) => {
        let changedValue = e.target.value;
        setValue(changedValue);
        let arr = [];
        data.forEach(element => {
            if (element.name.toLowerCase().includes(changedValue.toLowerCase()) && changedValue.length > 0) {
                arr.push(element);
            }
        });
        setSuggestions(arr);
    }

    return {
        value,
        suggestions,
        onChange,
    }
}