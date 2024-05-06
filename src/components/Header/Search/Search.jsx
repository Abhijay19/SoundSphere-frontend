import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from '../../../assets/products/earbuds-prod-1.webp'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import { FaMicrophone } from 'react-icons/fa'
const Search = ({setShowSearch}) => {
    const [query, setQuery] = useState('');
    const { transcript,
            listening,
            resetTranscript,
            browserSupportsSpeechRecognition } = useSpeechRecognition()
    const navigate = useNavigate()
    const onChange = (e) => {
        setQuery(e.target.value)

    }
    const onSpeak = () => {
        setQuery(transcript)
        
    }
    let {data} = useFetch(`/api/products?populate=*&[filters][title][$contains]=${query}`);
    if(!query.length){
        data = null
    }
    return (
        <div className="search-modal">
            <form className="form-field">
                <FaMicrophone className="mic" type="button" onClick={() => {
                    SpeechRecognition.startListening();
                }}/>
                       
                <button type="button" className="search-button" onClick={() => {SpeechRecognition.stopListening();
                    onSpeak();
                    resetTranscript()
                }}>Search</button>
                
                <input type="text" autoFocus placeholder="Search for products" value={listening ? transcript : query} onChange={onChange}/>
                <MdClose className="close" onClick={() => {setShowSearch(false)}}/>
            </form>
            <div className="search-result-content">
                <p>{transcript}</p>
                <div className="search-results">
                {data?.data?.map((item) => (
                    <div key={item.id} className="search-result-item" onClick={() => {
                        navigate('/product/' + item.id)
                        setShowSearch(false)
                    }}>
                        <div className="img-container">
                            <img src={process.env.REACT_APP_DEV_URL + item.attributes?.img?.data[0]?.attributes?.url} alt="" />
                         </div>
                         <div className="product-details">
                            <span className="name">{item.attributes.title}</span>
                            <span className="desc">{item.attributes.desc}</span>
                         </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
