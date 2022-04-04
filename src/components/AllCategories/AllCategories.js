import Filter from "./Filter";


const AllCategories = () => {
    const categories = ["SEAFOOD", "ITALIAN", "APPETIZERS", "SALADS", "ALL"]
  
return(
    <div>
        <h1>What kind of food do you like?</h1>   
     {categories
    .map( category => <Filter category={category} key={category}/> )}   
    </div>
)

}

export default AllCategories;