import Navbar from "../components/navbar";
import Register from "../components/register";
import Footer from "../components/footer";
import { getSession } from "next-auth/react";
import Link from "next/link";

export default function RegistrationPage() {
  return (
    <>
      <Navbar />
      <Register />
      <Footer />
    </>
  );
}

// export async function getServerSideProps({ req }) {
//   const session = await getSession({ req });

//   if (!session) {
//     return {
//       props: { session },
//     };
//   }

//   return {
//     redirect: {
//       destination: "/login",
//       permanent: false,
//     },
//   };
// }
