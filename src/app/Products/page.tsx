
import Link from "next/link";
import Navbar from "../../../component/Nav"

export default function Products() {
  return (
    <div>
      <Navbar/>
      <h1>Product 1Page List </h1>
      <ol>
        <li> <Link href="/Products/product"  >Product</Link></li>
        <li> <Link href="/Products/product"  >Product</Link></li>
        <li> <Link href="/Products/product"  >Product</Link></li>
      </ol>
    </div>
  );
}
