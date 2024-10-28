import { DataGrid } from '@mui/x-data-grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const columns = [
  {
    field: 'name',
    headerName: 'Nombre de la propiedad',
    width: '250 ',
    renderCell: params => (
      <a
        href={`https://example.com/${params.row.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-slate-500 "
      >
        <span className="text-black">{params.value}</span>
        <i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
      </a>
    ),
  },
  {
    valueGetter: (value, row) => {
      return row.city + ', ' + row.country
    },
    headerName: 'Ubicación',
    width: 280,
  },
  {
    field: 'type',
    valueGetter: value => {
      switch (value) {
        case 'commercial':
          return 'Comercial'
        case 'residential':
          return 'Residencial'
        case 'industrial':
          return 'Industrial'
      }
    },
    headerName: 'Tipo de propiedad',
    width: 180,
  },
  {
    field: 'status',
    headerName: 'Estado de la propiedad',
    width: 190,
  },
  {
    field: 'area',
    headerName: 'Tamaño(m²)',
    width: 130,
  },
  {
    field: 'minAmount',
    headerName: 'Inversión mínima',
    width: 130,
  },
  {
    field: 'profit',
    headerName: 'Rentabilidad Estimada',
    width: 180,
  },
  {
    field: 'time',
    headerName: 'Plazo de inversión',
    width: 180,
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
        columnHeaderTitleContainer: {},
        columnHeaderTitle: {
          color: 'white', // Cambia el color del texto de los encabezados
          fontWeight: 'bold',
        },
      },
    },
  },
})

function noRowsComponent() {
  return (
    <div className="h-1/2 w-full flex items-center justify-center">
      <p className="text-xl max-w-96 text-center text-gray">
        No hay registros con los términos de busqueda seleccionados
      </p>
    </div>
  )
}

export default function DataGridDemo({ data, loading }) {
  return (
    <ThemeProvider theme={theme}>
      <DataGrid
        rows={data}
        columns={columns}
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
        slotProps={{
          loadingOverlay: {
            variant: 'linear-progress',
            noRowsVariant: 'skeleton',
          },
        }}
        slots={{
          noRowsOverlay: noRowsComponent,
        }}
        loading={loading}
        sx={{
          '& .MuiDataGrid-row:nth-of-type(odd)': {
            backgroundColor: '#E7EDF5', // Color para las filas impares
          },
          '& .MuiDataGrid-row:nth-of-type(even)': {
            backgroundColor: 'white', // Color para las filas pares
          },
        }}
        style={{ height: 700, width: '100%' }}
      />
    </ThemeProvider>
  )
}
