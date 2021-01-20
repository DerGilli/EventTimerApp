import React from 'react'
import { Navbar, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { currentUser, logout } = useAuth()

  return (
    <Navbar className="w-100 bg-dark justify-content-between">
      <h4 className="text-light">Event App</h4>
      {currentUser && <Button size="sm" variant="danger" onClick={logout}>Log Out</Button>}
    </Navbar>
  )
}

export default Header
