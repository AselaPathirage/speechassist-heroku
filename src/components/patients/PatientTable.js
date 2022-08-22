import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';


const PatientTable = () => {
  //must be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'fullName',
        header: 'Full Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'telno',
        header: 'Telephone Number',
      },
      {
        accessorKey: 'patientId',
        header: 'Actions',
        id: 'patientId',
        Cell: ({ cell }) => (
          <Chip
            icon={<FaceIcon />}
            label="View"
            component={Link}
            to={`/therapist/patients/${cell.getValue()}`}
            clickable
            sx={{ bgcolor: '#d5e5f7' }}
          />
        ),
      }
    ],
    [],
  );

  //must be memoized or stable
  const data = useMemo(
    () => [
      {
        fullName: 'Asela Pathirage',
        email: 'aselapathirage@gmail.com',
        address: 'Horana',
        telno: '0776767878',
        patientId: '777'
      },
      {
        fullName: 'Harith Iduwara',
        email: 'harithiduwara@gmail.com',
        address: 'Maharagama',
        telno: '0711167878',
        patientId: '21'
      },
      {
        fullName: 'Yasith Samaradivakara',
        email: 'yasithsam@gmail.com',
        address: 'Aturugiriya',
        telno: '07767655578',
        patientId: '3'
      },
      {
        fullName: 'Nimesh Nishamal',
        email: 'nnimeshaa99@gmail.com',
        address: 'Gampaha',
        telno: '0776767878',
        patientId: '5'
      },
      {
        fullName: 'Nisan Perera',
        email: 'nisanperera@hotmail.com',
        address: 'Daraluwa',
        telno: '0776767878',
        patientId: '6'
      },
      {
        fullName: 'Nishmal Peris',
        email: 'nishperis@gmail.com',
        address: 'Kurunegala',
        telno: '0776767878',
        patientId: '7'
      },
      {
        fullName: 'Thiwanka Pathmika',
        email: 'thiwankapathmika@gmail.com',
        address: 'Kalutara',
        telno: '0776767878',
        patientId: '45'
      },
      {
        fullName: 'Kavindhu Hadapangoda',
        email: 'kavindhug@gmail.com',
        address: 'Kelaniya',
        telno: '0776222278',
        patientId: '45'
      },
      {
        fullName: 'Rasika Pathmika',
        email: 'rasikapg@gmail.com',
        address: 'Kelaniya',
        telno: '0776767878',
        patientId: '45'
      },
      {
        fullName: 'Chamal Godage',
        email: 'chamalgodage@gmail.com',
        address: 'Colombo',
        telno: '0776767878',
        patientId: '45'
      },

    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data} initialState={{ density: 'compact' }}/>;
};

export default PatientTable;