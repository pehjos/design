import React from 'react'
import './Categories.css'
import Category from './Category'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import { Camera, ChildCareOutlined,ExitToAppOutlined, ComputerOutlined, EditAttributesOutlined, FavoriteBorder, ForwardOutlined, GamesOutlined, HdSharp, HealingOutlined, HelpOutlineRounded, HomeOutlined, LanguageOutlined, LocalMallOutlined, NotificationImportantOutlined, PartyModeOutlined, PhoneAndroidOutlined, Rotate90DegreesCcwOutlined, Settings, ShoppingBasketOutlined, ShoppingCartOutlined, Store, StoreMallDirectoryOutlined, WbIncandescent } from '@material-ui/icons'

function Categories() {
    return (
        <div className='categories'>
            <div className="categories__left">
                <Category
                    Icon={WbIncandescent}
                    title='Consumer Electronics'
                    link='/electronics'
                />
                 <Category
                    Icon={Rotate90DegreesCcwOutlined}
                    title='Hardwares'
                    link='/warehouse'
                />
                 <Category
                    Icon={HealingOutlined}
                    title='Healthy & Beauty'
                    link='/health'
                />
                 <Category
                    Icon={PhoneAndroidOutlined}
                    title='Phones & Tablets'
                    noBorder
                    link='/phones'
                />
            </div>

            <div className="categories__right">
             
                <Category
                    Icon={EditAttributesOutlined}
                    title='Education'
                    link='/education'
                />
                <Category
                    Icon={OndemandVideoIcon}
                    title='Furniture'
                    link = '/home'
                />
                <Category
                    Icon={ChildCareOutlined}
                    title='babyCare'
                    link = '/baby'
                />
                <Category
                    Icon={ComputerOutlined}
                    title='Computing'
                    link = '/computers'
                    noBorder
                />
            </div>
        </div>
    )
}

export default Categories
