import { Link } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  backdrop-filter: blur(24px);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  width: 95%;
  box-shadow: var(--shadow-sm);
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  position: sticky;
`;

const NavigationContainer = styled.nav`
  display: flex;
  gap: 1rem;
`;
const StyledLink = styled(Link)`
  background-color: ${(props) => (props.$active ? ' var(--accent)' : 'transparent')};
  color: ${(props) => (props.$active ? ' var(--bg-main)' : 'var(--text-secondary)')};
  box-shadow: ${(props) => (props.$active ? ' var(--shadow-md)' : 'none')};
  text-decoration: none;
  padding: 0.55rem 0.8rem;
  border-radius: 10px;

  &:hover {
    color: var(--accent);
    background-color: var(--accent-soft);
  }
`;

export default function Navigation() {
  const [active, setActive] = useState(0);
  return (
    <Header>
      <h3>Shopify</h3>
      <NavigationContainer>
        <StyledLink $active={active === 0} onClick={() => setActive(0)} to="/home">
          Home
        </StyledLink>
        <StyledLink $active={active === 1} onClick={() => setActive(1)} to="/shop">
          Shop
        </StyledLink>
        <StyledLink $active={active === 2} onClick={() => setActive(2)} to="/cart">
          Cart
        </StyledLink>
      </NavigationContainer>
      <Link to="/cart">
        <ShoppingCart />
      </Link>
    </Header>
  );
}
