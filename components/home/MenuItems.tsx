
import {useConvexAuth} from "convex/react";
import Link from "next/link";

export default function MenuItems() {
  const {isAuthenticated} = useConvexAuth();
  return (
    <>
    
      {isAuthenticated && (
        <li className="hover:underline cursor-pointer">
          <Link href="dashboard" scroll>
            Dashboard
          </Link>
        </li>
      )}
    </>
  );
}
