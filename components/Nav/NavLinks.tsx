import List from '../List'

const NavLinks = () => {
  return (
    <List className="flex relative space-x-5 items-center h-full">
      <List.Item
        className="flex tracking-widest h-full items-center cursor-pointer hover:text-primary link-transition"
        bold
      >
        MENU
      </List.Item>
      <List.Item
        className="flex tracking-widest h-full items-center cursor-pointer nav_shadow-active hover:text-primary link-transition"
        bold
      >
        REWARDS
      </List.Item>
      <List.Item
        className="flex relative tracking-widest h-full items-center cursor-pointer hover:text-primary link-transition"
        bold
      >
        GIFT CARDS
      </List.Item>
    </List>
  )
}

export default NavLinks
