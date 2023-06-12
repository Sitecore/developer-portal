import TextLink from '@/../../packages/ui/components/common/TextLink';
import Image from 'next/image';
import { useState } from 'react';
import { GetProductLogoByVariant, Product, Type, Variant } from 'ui/common/assets';
import { HexagonCloud } from './HexagonCloud';
import { HexagonItem } from './HexagonItem';

type HexagonsProps = {
  className?: string;
};

function resetElements(invert?: boolean) {
  const allElements = document.querySelectorAll('#hex-list > li');
  const allElementsArray = Array.from(allElements);

  if (invert) {
    allElementsArray?.forEach((e) => {
      e.classList.remove('active');
    });
  } else {
    allElementsArray?.forEach((e) => {
      e.classList.add('active');
    });
  }
}

const Hexagons = ({ className }: HexagonsProps): JSX.Element | null => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className={`${className}`}>
      <section className="honeycomb has-dark-gradient honeycomb--6 dark:bg-theme-bg bg-white">
        <div className="honeycomb__grid">
          <ul className="hex-grid__tabs">
            <HexagonCloud
              name={'Content Cloud'}
              id="content-cloud"
              key={1}
              logoUrl={'/images/sitecore-content-cloud-color.svg'}
              description={'Sitecore Content Cloud allows you to incrementally implement just what you need and integrate world-class solutions seamlessly with your existing tech stack.'}
              href={'#'}
              linkText={'Learn more'}
              onClick={() => handleOpen(1)}
              isOpen={open == 1}
            >
              <div className="hex-grid__tab__items--mobile">
                <ul className="mobile__hex__items">
                  <li className="mobile__hex__item mobile__hex__item--violet">
                    <Image src={GetProductLogoByVariant(Product.ContentHubOne, Variant.Light, Type.IconOnly)} className=" dark:hidden" alt="Sitecore Content Hub ONE icon" width="30" height="30" />
                    <Image src={GetProductLogoByVariant(Product.ContentHubOne, Variant.Dark, Type.IconOnly)} className="hidden dark:block" alt="Sitecore Content Hub ONE icon" width="30" height="30" />

                    <h3>Content Hub ONE</h3>
                    <p className="mobile__hex__item__description">A powerful and intuitive headless CMS for the simplified creation and management of experiences across channels and devices.</p>

                    <TextLink href="/products/content-hub-one" text="Learn more" />
                  </li>
                  <li className="mobile__hex__item mobile__hex__item--violet">
                    <img src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/cloud-icons/app-icon-xm-cloud.svg?md=20220916T131538Z" className="mobile__hex__item__logo" alt="Sitecore XM Cloud" width="30" height="30" />
                    <h3 className="mobile__hex__item__title">Enterprise CMS</h3>
                    <p className="mobile__hex__item__description">Create, manage, and deliver relevant content everywhere, lightning-fast, with a world-leading, enterprise-ready CMS.</p>
                    <a href="/products/xm-cloud" className="mobile__hex__item__link link-arrow-black">
                      Learn more
                      <i className="icn-arrow-right icon"></i>
                    </a>
                  </li>
                  <li className="mobile__hex__item mobile__hex__item--violet">
                    <img
                      src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/cloud-icons/app-icon-content-operations.svg?md=20220920T104008Z"
                      className="mobile__hex__item__logo"
                      alt="Content Operations"
                      width="30"
                      height="30"
                    />
                    <h3 className="mobile__hex__item__title">Content Operations</h3>
                    <p className="mobile__hex__item__description">Collaborate effortlessly on content strategy, creation, and analytics with an intelligent content operations solution.</p>
                    <a href="/products/content-hub-operations" className="mobile__hex__item__link link-arrow-black">
                      Learn more
                      <i className="icn-arrow-right icon"></i>
                    </a>
                  </li>
                  <li className="mobile__hex__item mobile__hex__item--violet">
                    <img src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/cloud-icons/app-icon-dam.svg?md=20220920T104315Z" className="mobile__hex__item__logo" alt="Sitecore DAM" width="30" height="30" />
                    <h3 className="mobile__hex__item__title">Digital Asset Management</h3>
                    <p className="mobile__hex__item__description">Centralize all your digital assets and deliver them to any customer touchpoint with an automated digital asset management (DAM) solution.</p>
                    <a href="/products/content-hub-dam" className="mobile__hex__item__link link-arrow-black">
                      Learn more
                      <i className="icn-arrow-right icon"></i>
                    </a>
                  </li>
                  <li className="mobile__hex__item mobile__hex__item--violet">
                    <img src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/cloud-icons/app-icon-search.svg?md=20221010T101544Z" className="mobile__hex__item__logo" alt="Sitecore Search" width="30" height="30" />
                    <h3 className="mobile__hex__item__title">Intelligent Content Search</h3>
                    <p className="mobile__hex__item__description">Predict search intent and display individualized results with a personalized search experience.</p>
                    <a href="/products/search" className="mobile__hex__item__link link-arrow-black">
                      Learn more
                      <i className="icn-arrow-right icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </HexagonCloud>

            <HexagonCloud
              name={'Engagement Cloud'}
              id="engagement-cloud"
              key={2}
              logoUrl={'/images/sitecore-engagement-cloud-color.svg'}
              description={'With Sitecore Engagement Cloud, brands have the tools they need - connect and activate customer data across the ecosystem, personalize with ease, and optimize every experience across every channel.'}
              href={'#'}
              linkText={'Learn more'}
              onClick={() => handleOpen(2)}
              isOpen={open == 2}
            >
              <div className="hex-grid__tab__items--mobile">
                <ul className="mobile__hex__items">
                  <li className="mobile__hex__item mobile__hex__item--red">
                    <img src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/cloud-icons/app-icon-personalize.svg?md=20220920T101913Z" className="mobile__hex__item__logo" alt="Sitecore Personalize" width="30" height="30" />
                    <h3 className="mobile__hex__item__title">Personalization and Testing</h3>
                    <p className="mobile__hex__item__description">Optimize every experience across every channel with the leading experimentation and personalization platform.</p>
                    <a href="/products/personalize" className="mobile__hex__item__link link-arrow-black">
                      Learn more
                      <i className="icn-arrow-right icon"></i>
                    </a>
                  </li>
                  <li className="mobile__hex__item mobile__hex__item--red">
                    <img src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/cloud-icons/app-icon-send.svg?md=20220920T102247Z" className="mobile__hex__item__logo" alt="Sitecore Send" width="30" height="30" />
                    <h3 className="mobile__hex__item__title">Marketing Automation</h3>
                    <p className="mobile__hex__item__description">Automate personalized email engagements that build trust and foster long-term relationships.</p>
                    <a href="/products/send" className="mobile__hex__item__link link-arrow-black">
                      Learn more
                      <i className="icn-arrow-right icon"></i>
                    </a>
                  </li>
                  <li className="mobile__hex__item mobile__hex__item--red">
                    <img src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/cloud-icons/app-icon-cdp.svg?md=20220920T100852Z" className="mobile__hex__item__logo" alt="Sitecore CDP" width="30" height="30" />
                    <h3 className="mobile__hex__item__title">Customer Data Platform</h3>
                    <p className="mobile__hex__item__description">Connect and activate customer data across your ecosystem to drive relevance with an intelligent customer data platform.</p>
                    <a href="/products/customer-data-platform" className="mobile__hex__item__link link-arrow-black">
                      Learn more
                      <i className="icn-arrow-right icon"></i>
                    </a>
                  </li>
                  <li className="mobile__hex__item mobile__hex__item--red">
                    <img src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/newnavigation/products/app-icon-connect.svg?md=20230227T180138Z" className="mobile__hex__item__logo" alt="Sitecore Connect" width="30" height="30" />
                    <h3 className="mobile__hex__item__title">Automation</h3>
                    <p className="mobile__hex__item__description">Integrate seamlessly with third-party apps and connectors.</p>
                    <a href="/products/connect" className="mobile__hex__item__link link-arrow-black">
                      Learn more
                      <i className="icn-arrow-right icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </HexagonCloud>

            <HexagonCloud
              name={'Commerce Cloud'}
              id="commerce-cloud"
              key={3}
              logoUrl={'/images/sitecore-commerce-cloud-color.svg'}
              description={'Sitecore Commerce Cloud is the key to your commerce growth strategy, enabling businesses to acquire and engage new shoppers at any moment.'}
              href={'#'}
              linkText={'Learn more'}
              onClick={() => handleOpen(3)}
              isOpen={open == 3}
            >
              <div className="hex-grid__tab__items--mobile">
                <ul className="mobile__hex__items">
                  <li className="mobile__hex__item mobile__hex__item--teal">
                    <img src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/cloud-icons/app-icon-discover.svg?md=20220920T102542Z" className="mobile__hex__item__logo" alt="Sitecore Discover" width="30" height="30" />

                    <h3 className="mobile__hex__item__title">Product Discovery</h3>
                    <p className="mobile__hex__item__description">Amplify customer conversions with hyper-relevant search results and AI-driven, automated merchandising.</p>
                    <a href="/products/discover" className="mobile__hex__item__link link-arrow-black">
                      Learn more
                      <i className="icn-arrow-right icon"></i>
                    </a>
                  </li>
                  <li className="mobile__hex__item mobile__hex__item--teal">
                    <img src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/cloud-icons/app-icon-ordercloud.svg?md=20220920T102842Z" className="mobile__hex__item__logo" alt="Sitecore OrderCloud" width="30" height="30" />
                    <h3 className="mobile__hex__item__title">B2X Commerce</h3>
                    <p className="mobile__hex__item__description">Scale your business, sell on any channel, and future-proof your commerce strategy with the next-generation headless commerce platform.</p>
                    <a href="/products/ordercloud" className="mobile__hex__item__link link-arrow-black">
                      Learn more
                      <i className="icn-arrow-right icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </HexagonCloud>
          </ul>

          <div className="hex-grid__container">
            <ul className="hex-grid__list" id="hex-list">
              <li className="hex-grid__item transparent"></li>
              <li className="hex-grid__item transparent"></li>

              <HexagonItem
                product={Product.CDP}
                modalTitle={'Customer Data Platform'}
                description={
                  'Optimize every experience across every channel with the leading experimentation aConnect and activate customer data across your ecosystem to drive relevance with an intelligent customer data platform.nd personalization platform.'
                }
                cloud={'engagement-cloud'}
                color={'red'}
                linkHref="#"
              />

              <li className="hex-grid__item transparent"></li>

              <HexagonItem
                product={Product.Discover}
                modalTitle={'Product Discovery'}
                description={'Amplify customer conversions with hyper-relevant search results and AI-driven, automated merchandising.'}
                cloud={'commerce-cloud'}
                color={'teal'}
                linkHref="#"
              />

              <li className="hex-grid__item transparent"></li>

              <HexagonItem product={Product.Connect} modalTitle={'Automation'} description={'Integrate seamlessly with third-party apps and connectors.'} cloud={'engagement-cloud'} color={'red'} linkHref="#" />

              <HexagonItem
                product={Product.Send}
                modalTitle={'Marketing Automation'}
                description={'Automate personalized email engagements that build trust and foster long-term relationships.'}
                cloud={'engagement-cloud'}
                color={'red'}
                linkHref="#"
              />
              <HexagonItem
                product={Product.XMCloud}
                modalTitle={'Enterprise CMS'}
                description={'Create, manage, and deliver relevant content everywhere, lightning-fast, with a world-leading, enterprise-ready CMS.'}
                cloud={'content-cloud'}
                color={'violet'}
                linkHref="#"
              />
              <HexagonItem
                product={Product.Personalize}
                modalTitle={'Personalization and Testing'}
                description={'Optimize every experience across every channel with the leading experimentation and personalization platform.'}
                cloud={'engagement-cloud'}
                color={'red'}
                linkHref="#"
              />
              <HexagonItem
                product={Product.DAM}
                modalTitle={'Digital Asset Management'}
                description={'Centralize all your digital assets and deliver them to any customer touchpoint with an automated digital asset management (DAM) solution.'}
                cloud={'content-cloud'}
                color={'violet'}
                linkHref="#"
              />
              <HexagonItem
                product={Product.OrderCloud}
                modalTitle={'B2X Commerce'}
                description={'Scale your business, sell on any channel, and future-proof your commerce strategy with the next-generation headless commerce platform.'}
                cloud={'commerce-cloud'}
                color={'teal'}
                linkHref="#"
              />
              <li className="hex-grid__item transparent"></li>
              <HexagonItem
                product={Product.Search}
                modalTitle={'Intelligent Content Search'}
                description={'Predict search intent and display individualized results with a personalized search experience.'}
                cloud={'content-cloud'}
                color={'violet'}
                linkHref="#"
              />
              <li className="hex-grid__item transparent"></li>
              <HexagonItem
                product={Product.ContentHubOne}
                modalTitle={'Agile CMS'}
                description={'A powerful and intuitive headless CMS for the simplified creation and management of experiences across channels and devices.'}
                cloud={'content-cloud'}
                color={'violet'}
                linkHref="#"
              />
              <li className="hex-grid__item transparent"></li>
              <HexagonItem
                product={Product.ContentOps}
                modalTitle={'Content Operations'}
                description={'Collaborate effortlessly on content strategy, creation, and analytics with an intelligent content operations solution.'}
                cloud={'content-cloud'}
                color={'violet'}
                linkHref="#"
              />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hexagons;
