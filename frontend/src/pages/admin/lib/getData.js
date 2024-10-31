import Cookies from 'js-cookie'

export async function getRecentlyActivity() {
  try {
    const response = await fetch(
      'https://brickly-backend.onrender.com/api/v1/investments/recently',
      {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('auth'),
        },
      }
    )

    if (!response.ok) {
      console.log(await response.json())
    }

    const data = await response.json()

    return data
  } catch (err) {
    console.log(err)
  }
}

export async function getPropertiesCount() {
  try {
    const response = await fetch(
      'https://brickly-backend.onrender.com/api/v1/properties/counts',
      {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('auth'),
        },
      }
    )

    if (!response.ok) {
      console.log(await response.json())
    }

    const data = await response.json()

    return data
  } catch (err) {
    console.log(err)
  }
}

export async function getTotalInvestments() {
  try {
    const response = await fetch(
      'https://brickly-backend.onrender.com/api/v1/investments/stats',
      {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('auth'),
        },
      }
    )

    if (!response.ok) {
      console.log(await response.json())
    }

    const data = await response.json()

    return data
  } catch (err) {
    console.log(err)
  }
}

export async function getPropertyInfo(id) {
  try {
    const response = await fetch(
      'https://brickly-backend.onrender.com/api/v1/properties/' + id,
      {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('auth'),
        },
      }
    )

    if (!response.ok) {
      console.log(await response.json())
    }

    const data = await response.json()

    return data
  } catch (err) {
    console.log(err)
  }
}

export async function getUsers(filter) {
  try {
    const response = await fetch('https://brickly-backend.onrender.com/api/v1/users', {
      headers: {
        Authorization: 'Bearer ' + Cookies.get('auth'),
      },
    })

    if (!response.ok) {
      console.log(await response.json())
    }

    const data = await response.json()

    return data
  } catch (err) {
    console.log(err)
  }
}
