"use client"
import Link from "next/link";
import "../styles/categories.css";
import { useRouter } from "next/navigation";

const Categories = () => {
  const router=useRouter();
  return (
    <>
     <div className="pt-[2rem]">
        <h1 className="text-[3rem] font-bold text-center">Shop All Categories</h1>
     </div>
      <div className="categories w-[80%] flex justify-center pt-[3rem] container">
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product Image"
              onClick={()=>router.push('/productCategory/Watches')}
              className="cursor-pointer"
            />
            <button>
              <Link className="link" href="/productCategory/Watches">
                Watches
              </Link>
            </button>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/191877/pexels-photo-191877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product Image"
              onClick={()=>router.push('/productCategory/Speakers')}
              className="cursor-pointer"
            />
            <button>
              <Link className="link" href="/productCategory/Speakers">
                Speakers
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product Image"
              onClick={()=>router.push('/productCategory/Earbuds')}
              className="cursor-pointer"
            />
            <button>
              <Link className="link" href="/productCategory/Earbuds">
                Earbuds
              </Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row bg-red-500">
                <img
                  src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1    "
                  alt="Product Image"
                  onClick={()=>router.push('/productCategory/Earbuds')}
                  className="cursor-pointer"
                />
                <button>
                  <Link className="link" href="/productCategory/Earbuds">
                    Earphones
                  </Link>
                </button>
              </div>
            </div>
            
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product Image"
              onClick={()=>router.push('/productCategory/Headphones')}
              className="cursor-pointer"
            />
            <button>
              <Link className="link" href="/productCategory/Headphones">
                Headphones
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
