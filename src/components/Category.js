import React,  {useState} from 'react'
import Categories from './Categories';
import './Category.css';


const cat = ["Todos","Grandes Eletrodomésticos","Pequenos Electrodomésticos","TV, vidéo e som", "Informatica e acessorios","Brinquedos"];

const Category = () => {


const[data, setData] = useState(Categories);

const filterResult =(catItem) =>{
  const result = Categories.filter(curDate => {
    return curDate.category === catItem;

  });
  setData(result);
}

  return (

    <>
  
  <div className="nava container-fluid d.flex text-center pt-4">
    <div className='row justify-content-around'>
      <button type="button" className="btn btn-outline-primary m-2" id="btn" onClick={() => setData(Categories)}>{cat[0]}</button>
      <button type="button" className="btn btn-outline-primary m-2" id="btn" onClick={() => filterResult(cat[1])}>{cat[1]}</button>
      <button type="button" className="btn btn-outline-primary m-2" id="btn" onClick={() => filterResult(cat[2])}>{cat[2]}</button>
      <button type="button" className="btn btn-outline-primary m-2" id="btn" onClick={() => filterResult(cat[3])}>{cat[3]}</button>
      <button type="button" className="btn btn-outline-primary m-2" id="btn" onClick={() => filterResult(cat[4])}>{cat[4]}</button>
      <button type="button" className="btn btn-outline-primary m-2" id="btn" onClick={() => filterResult(cat[5])}>{cat[5]}</button>
    </div>
  </div>

  
        
   {data.map((values)=> {
    const {title,image,description,descriptionProduct1,descriptionProduct2,descriptionProduct3,descriptionProduct4, price, priceBefore,link} = values;
    
    return (
      <div className="container text-center ">
        <div className="bom row bg-white border border-dark p-2 m-5 ">
          <div className="col ">
            <img src={image} className="photo img-fluid p-3" alt={title}></img>
          </div>
          <div className="p col align-self-center">
            <p className='description'>{description}</p>
              {descriptionProduct1} <br/>
              {descriptionProduct2} <br/>
              {descriptionProduct3} <br/>
              {descriptionProduct4} <br/>
          </div>
          <div className="col align-self-center">
            <div className="">
              <div className="prix text-center">preço :</div>
              <div className="prix text-primary text-center">{price}<br/>(<strike>{priceBefore}</strike>)</div>
            </div>
          </div>
        
          <div className="col align-self-center">
          <a href={link} target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary m-3 " id="btnver">ver mais</button></a>
          </div>
        </div>
      </div>
    
    )})}
    </>
    )} 




export default Category

    