import Stack from "react-bootstrap/Stack";
import Button from 'react-bootstrap/Button';
import {useDispatch} from "react-redux"
import { filterCate } from "../store/productCate";
function ProductsCateogory() {
  const dispatch = useDispatch();
  const handleCategory=(category)=>{
    dispatch(filterCate(category));
  }
  return (
   <>
   <h2 className="text-center">SELECT ANY CATEOGORY</h2>
    <div className="d-flex justify-content-center align-items-center m-4 p-4" >
      
      <Stack direction="horizontal" gap={3} className="mx-auto " >

      <Button
     variant="warning"
          onClick={() => handleCategory("all")}
        >
          All
        </Button>
        <Button
           variant="warning" onClick={() => handleCategory("smartphones")}
        >
          smartphones
        </Button>
        <Button
         variant="warning" onClick={() => handleCategory("laptops")}
        >
          laptops
        </Button>
        <Button
         variant="warning" onClick={() => handleCategory("skincare")}
        >
          skincare
        </Button>
        <Button
          variant="warning" onClick={() => handleCategory("groceries")}
        >
          groceries
        </Button>
      
        <Button
          variant="warning" onClick={() => handleCategory("home-decoration")}
        >
          home-decoration
        </Button>
        <Button
         variant="warning" onClick={() => handleCategory("fragrances")}
        >
          fragrances
        </Button>
      </Stack>
    </div>
   </>
  );
}
export default ProductsCateogory;
