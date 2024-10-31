import { DataGrid } from '@mui/x-data-grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { format } from 'date-fns'

function formatDate(dateString) {
  return format(new Date(dateString), 'dd/MM/yy')
}

const userColumns = [
  {
    field: 'name',
    headerName: 'Nombre del Usuario',
    width: 250,
  },
  {
    field: 'phone',
    headerName: 'Teléfono',
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Correo Electrónico',
    width: 300,
    renderCell: params => (
      <a href={`mailto:${params.value}`} className="text-blue-500">
        {params.value}
      </a>
    ),
  },
  {
    field: 'totalInvestment',
    headerName: 'Monto Total Invertido',
    width: 200,
  },
  {
    field: 'country',
    headerName: 'País',
    width: 220,
  },
  {
    field: 'createdAt',
    headerName: 'Fecha de Registro',
    width: 200,
    valueGetter: value => formatDate(value),
  },
]

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu',
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        columnSeparator: {
          color: 'transparent',
        },
        columnHeader: {
          backgroundColor: '#0C49B0',
        },
        columnHeaderTitle: {
          color: 'white',
          fontWeight: 'bold',
        },
      },
    },
  },
})

function NoRowsComponent() {
  return (
    <div className="h-1/2 w-full flex items-center justify-center">
      <p className="text-xl max-w-96 text-center text-gray">
        No hay usuarios disponibles
      </p>
    </div>
  )
}

export default function UserDataGrid({ data, loading }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="h-[700px] w-full">
        <DataGrid
          rows={data}
          columns={userColumns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          columnHeaderHeight={36}
          disableRowSelectionOnClick
          slots={{
            noRowsOverlay: NoRowsComponent,
          }}
          slotProps={{
            loadingOverlay: {
              variant: 'linear-progress',
              noRowsVariant: 'skeleton',
            },
          }}
          loading={loading}
          sx={{
            '& .MuiDataGrid-row:nth-of-type(odd)': {
              '@apply bg-gray-100': {}, // Color para filas impares
            },
            '& .MuiDataGrid-row:nth-of-type(even)': {
              '@apply bg-white': {}, // Color para filas pares
            },
          }}
          className="border border-gray-300"
        />
      </div>
    </ThemeProvider>
  )
}
