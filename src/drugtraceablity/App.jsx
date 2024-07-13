import { Routes, Route } from "react-router-dom";
import Updatedistributer from "./updatedistributer";
import Viewdistributer from "./viewdistributer";
import Adddistributer from "./adddistributer";
import Updatedruglot from "./updatedruglot";
import Viewdruglot from "./viewdruglot";
import Adddruglot from "./adddruglot";
import Updateingredient from "./updateingredient";
import Viewingredient from "./viewingredient";
import Addingredient from "./addingredient";
import Updateingredient_supplier from "./updateingredient_supplier";
import Viewingredient_supplier from "./viewingredient_supplier";
import Addingredient_supplier from "./addingredient_supplier";
import Updatemanufacture from "./updatemanufacture";
import Viewmanufacture from "./viewmanufacture";
import Addmanufacture from "./addmanufacture";
import Updatepatient from "./updatepatient";
import Viewpatient from "./viewpatient";
import Addpatient from "./addpatient";
import Updatepharmacy from "./updatepharmacy";
import Viewpharmacy from "./viewpharmacy";
import Addpharmacy from "./addpharmacy";
import Updatetransaction from "./updatetransaction";
import Viewtransaction from "./viewtransaction";
import Addtransaction from "./addtransaction";
import Login from "./Login";
import Register from "./Register";
import Viewfda from "./Viewfda";
import Myingredient from "./Myingredient";
import Transferingredient from "./Transferingredient";
import Mymingredient from "./Mymingredient";
import Requestapproval from "./Requestapproval";
import Viewdrugloteach from "./viewdrugloteach";
import Transerdrug from "./Transferdrug";
import Tranfertopharmacy from "./Transfertopharmacy";
import Viewdrugpharmacy from "./viewdrugpharmacy";
import Searchdrug from "./Searchdrug";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/updatedistributer" element={<Updatedistributer />} />
        <Route path="/viewdistributer" element={<Viewdistributer />} />
        <Route path="/adddistributer" element={<Adddistributer />} />

        <Route path="/updatedruglot" element={<Updatedruglot />} />
        <Route path="/viewdrug" element={<Viewdruglot />} />
        <Route path="/viewdrugpharmacy" element={<Viewdrugpharmacy />} />
        <Route path="/adddruglot" element={<Adddruglot />} />

        <Route path="/updateingredient" element={<Updateingredient />} />
        <Route path="/viewingredient" element={<Viewingredient />} />
        <Route path="/addingredient" element={<Addingredient />} />

        <Route
          path="/updateingredient_supplier"
          element={<Updateingredient_supplier />}
        />
        <Route
          path="/viewingredient_supplier"
          element={<Viewingredient_supplier />}
        />
        <Route
          path="/addingredient_supplier"
          element={<Addingredient_supplier />}
        />

        <Route path="/updatemanufacture" element={<Updatemanufacture />} />
        <Route path="/viewmanufacture" element={<Viewmanufacture />} />
        <Route path="/addmanufacture" element={<Addmanufacture />} />

        <Route path="/updatepatient" element={<Updatepatient />} />
        <Route path="/viewpatient" element={<Viewpatient />} />
        <Route path="/addpatient" element={<Addpatient />} />

        <Route path="/updatepharmacy" element={<Updatepharmacy />} />
        <Route path="/viewpharmacy" element={<Viewpharmacy />} />
        <Route path="/addpharmacy" element={<Addpharmacy />} />

        <Route path="/updatetransaction" element={<Updatetransaction />} />
        <Route path="/viewtransaction" element={<Viewtransaction />} />
        <Route path="/addtransaction" element={<Addtransaction />} />

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/viewfda" element={<Viewfda />} />

        <Route path="/myingredient" element={<Myingredient />} />
        <Route path="/mymingredient" element={<Mymingredient />} />
        <Route path="/transferingredient" element={<Transferingredient />} />
        <Route path="/transferdrug" element={<Transerdrug />} />
        <Route path="/transfertopharmacy" element={<Tranfertopharmacy />} />

        <Route path="/searchdrug" element={<Searchdrug />} />

        <Route path="/requestapproval" element={<Requestapproval />} />
        <Route path="/viewdrugloteach" element={<Viewdrugloteach />} />
      </Routes>
    </>
  );
};

export default App;
