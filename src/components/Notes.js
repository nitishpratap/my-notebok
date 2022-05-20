import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
// import  i from 'bootstrap-icons'
// import AddIcon from '@mui/icons-material/Add';
import DisplayNote from "./DisplayNote";
import { AiFillAccountBook } from "react-icons/ai";
function Notes(note, title) {
  const [newNote, setNewNote] = useState([]);
  const [finalNote, setFinalNote] = useState([]);
  const [noteObject, setNoteObject] = useState({});
  const [notes, setNotes] = useState("");
  const [titles, setTitle] = useState("");
  const [category,setCategory]=useState('')
  //   const [titl,setTitle]= useState('hfh')

  useEffect(() => {
    setNewNote([...newNote, noteObject]);
    // console.log(title.title)
  }, [noteObject]);
  useEffect(() => {
    const temp = newNote.filter((n) => {
      return n.data != undefined;
    });
    //   console.log(temp)
    setFinalNote(temp);
  }, [newNote]);

  return (
    <div>
    {AiFillAccountBook}
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <input
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <br></br>
        <textarea
          placeholder="Take a note"
          cols={22}
          rows={5}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></textarea>
        <br></br>
         <Button
        onClick={() => {
          const temp = {
            id: newNote.length + 1,
            data: notes,
            titl:titles
          };

          setNoteObject(temp);
          
          //   setTitle(title.title)
        }}
      >
        Add Note
      </Button>
     

     

      </div>

     
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {finalNote.map((n) => {
          {
            return (
              <div className="product" style={{ margin: "1rem" }}>
              <div style={{
                    width: "18rem",
                    height: "12rem",
                    display: "flex",
                    border: "1px solid grey",
                  }}>
                <Card>
                  <Card.Body  style={{whiteSpace:'initial'}}>
                  <h1 style={{textAlign:'center',}}>{n.titl}</h1>
                  <hr style={{width:'18rem'}}></hr>
                  
                    <Card.Text>{n.data}</Card.Text>
                    <div >
                    <button style={{marginTop:'7.1rem',marginLeft:'15.6rem'}} onClick={(e)=>{
                      const temp = finalNote.filter((t)=>{
                          return(
                              n.id!=t.id
                          )

                      })
                      setFinalNote(temp)
                  }}>delete</button>
                 </div>
                  </Card.Body>

                  
                 
                </Card>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Notes;
