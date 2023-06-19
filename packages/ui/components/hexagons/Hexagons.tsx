import { useState } from 'react';
import FeedHeading from 'ui/components/headings/FeedHeading';
import { CommerceCloud, ContentCloud, EngagementCloud } from '../../../../apps/devportal/data/data-clouds';
import { CDP, Connect, ContentHubONE, ContentOps, DAM, Discover, OrderCloud, Personalize, Search, Send, XMCloud } from '../../../../apps/devportal/data/data-products';
import { HexagonCloud } from './HexagonCloud';
import { HexagonItem } from './HexagonItem';
import { HexagonMobileItem } from './HexagonMobileItem';

type HexagonsProps = {
  className?: string;
};

const Hexagons = ({ className }: HexagonsProps): JSX.Element | null => {
  const [open, setOpen] = useState(0);
  const [modal, setModal] = useState(0);

  const handleModal = (value: number) => {
    setModal(modal === value ? 0 : value);
  };

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className={`honeycomb my-8 ${className}`}>
      <section className="has-dark-gradient honeycomb--6">
        <FeedHeading
          title="Explore our SaaS DXP"
          link={{
            href: '/products',
            title: 'Product overview',
          }}
        />
        <p className="text-theme-text-alt">
          Sitecore&apos;s SaaS-enabled, composable digital experience platform (DXP) allows you to choose which products you want to implement from search to purchase to post-sale marketing with solutions for Content, Experience, and Commerce.
        </p>
        <div className="honeycomb__grid">
          <ul className="hex-grid__tabs">
            <HexagonCloud cloud={ContentCloud} key={1} onClick={() => handleOpen(1)} isOpen={open == 1}>
              <div className="hex-grid__tab__items--mobile">
                <ul className="mobile__hex__items">
                  <HexagonMobileItem product={ContentHubONE} />
                  <HexagonMobileItem product={XMCloud} />
                  <HexagonMobileItem product={ContentOps} />
                  <HexagonMobileItem product={DAM} />
                  <HexagonMobileItem product={Search} />
                </ul>
              </div>
            </HexagonCloud>

            <HexagonCloud cloud={EngagementCloud} key={2} onClick={() => handleOpen(2)} isOpen={open == 2}>
              <div className="hex-grid__tab__items--mobile">
                <ul className="mobile__hex__items">
                  <HexagonMobileItem product={Personalize} />
                  <HexagonMobileItem product={Send} />
                  <HexagonMobileItem product={CDP} />
                  <HexagonMobileItem product={Connect} />
                </ul>
              </div>
            </HexagonCloud>

            <HexagonCloud cloud={CommerceCloud} key={3} onClick={() => handleOpen(3)} isOpen={open == 3}>
              <div className="hex-grid__tab__items--mobile">
                <ul className="mobile__hex__items">
                  <HexagonMobileItem product={Discover} />
                  <HexagonMobileItem product={OrderCloud} />
                </ul>
              </div>
            </HexagonCloud>
          </ul>

          <div className="hex-grid__container">
            <ul className="hex-grid__list" id="hex-list">
              <HexagonItem />
              <HexagonItem />
              <HexagonItem product={CDP} onClick={() => handleModal(1)} showModal={modal == 1} />
              <HexagonItem />
              <HexagonItem product={Discover} onClick={() => handleModal(2)} showModal={modal == 2} />
              <HexagonItem />
              <HexagonItem product={Connect} onClick={() => handleModal(3)} showModal={modal == 3} />
              <HexagonItem product={Send} onClick={() => handleModal(4)} showModal={modal == 4} />
              <HexagonItem product={XMCloud} onClick={() => handleModal(5)} showModal={modal == 5} />
              <HexagonItem product={Personalize} onClick={() => handleModal(6)} showModal={modal == 6} />
              <HexagonItem product={DAM} onClick={() => handleModal(7)} showModal={modal == 7} />
              <HexagonItem product={OrderCloud} onClick={() => handleModal(8)} showModal={modal == 8} />
              <HexagonItem />
              <HexagonItem product={Search} onClick={() => handleModal(9)} showModal={modal == 9} />
              <HexagonItem />
              <HexagonItem product={ContentHubONE} onClick={() => handleModal(10)} showModal={modal == 10} />
              <HexagonItem />
              <HexagonItem product={ContentOps} onClick={() => handleModal(11)} showModal={modal == 11} />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hexagons;
