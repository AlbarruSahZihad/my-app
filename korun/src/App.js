// import React, { Component } from 'react'

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       nama:'RPL',
//       jumlah:0
//      }
//   }

//   ubah_statet=()=>{
//     this.setState({nama:'Rekayasay Perangkat Lunak'})
//   }

//   kembali_statet=()=>{
//     this.setState({nama:'RPL'})
//   }


  // tambah=()=>{
  //   this.setState({jumlah:this.state.jumlah +1})
  // }

  // kurang=()=>{
  //   if (this.state.jumlah > 0) {
  //   this.setState({jumlah:this.state.jumlah -1})}
  // }

  
  

//   render() { 
//     return ( 
//       <>
//         {/* <h1>{this.state.nama}</h1> */}
//         {/* <button onClick={this.ubah_statet}>Ubah</button>
//         <button onClick={this.kembali_statet}>Ubah</button> */}
      
//         <h1>{this.state.jumlah}</h1>
//         <button onClick={this.tambah}>+</button>
//         <button onClick={this.kurang}>-</button>

//       </>
//      );
//   }
// }
 
// export default App;
















import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Gambar from './images/th.webp'
import './App.css'

function Kartu(props) {
  return ( 
    <>
     <div className="card m-5" >
       <img src={Gambar} className="card-img-top" alt="..."/>
       <div className="card-body">
         <h5 className="card-title">{props.judul}</h5>
          <p className="text-danger">{props.harga}</p>
          <hr/>
       </div>
      </div>    
    </>
   );
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    nama:"AL BARRU SAH ZIHAD",
    sekolah:"SMKS TARUNA PERSADA DUMAI",
    judul:"SSD PLATINUM 128GB",
    harga:156000,
    jumlah:0,
    ht:156000,
    total:0
  }}

  tambah=()=>{
    this.setState({
      jumlah:this.state.jumlah +1,
      total:this.state.ht * (this.state.jumlah + 1)
    })
  }

  kurang=()=>{
    if (this.state.jumlah > 0) {
    this.setState({
      jumlah:this.state.jumlah -1,
      total:this.state.ht * (this.state.jumlah - 1)})
    }
    
  }
  
  render() { 
    return (  
      <>
      <Kartu judul={this.state.judul} harga={this.state.harga}/>

          <div className="card m-5" >
            <div className="card-body">
            <div className='row'>
            <div className='col'>
            <button onClick={this.kurang} className='btn btn-danger'>-</button>
            </div>
            <div className='col'>
            <h1>{this.state.jumlah}</h1>
            </div>
            <div className='col'>
            <button onClick={this.tambah} className='btn btn-success'>+</button>
            </div>
          
      </div>
      <hr/>
      <h4  className="card-text ">
        <p><b>Total: Rp{this.state.total}</b></p>
      </h4>
      <hr/>
    </div>
    </div>
      </>
    );
  }
}
 
export default App;