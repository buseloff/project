import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./HowItWorksPage.module.sass";

const HowItWorksPage = (props) => {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <div className={styles.heroSection}>
          <div className={styles.row}>
            <div className={styles.column1}>
              <span className={styles.column1__btn}>
                World's #1 Naming Platform
              </span>
              <div className={styles.column1Description}>
                <h1>How Does Squadhelp Work?</h1>
                <p>
                  Squadhelp helps you come up with a great name for your
                  business by combining the power of crowdsourcing with
                  sophisticated technology and Agency-level validation services.
                </p>
              </div>
              <div className={styles.column1Video}>
                <a href="https://vimeo.com/368584367" target="_parent">
                  Play Video
                </a>
               
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.column2Figure}>
                <figure>
                  <img src="./img/herosection.png" alt="#figure" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.servicesSection}>
          <div className={styles.servicesSection__title}>
            <small className={styles.servicesSection__btn}>Our Services</small>
            <h2>3 Ways To Use Squadhelp</h2>
            <p>
              Squadhelp offers 3 ways to get you a perfect name for your
              business.
            </p>
          </div>
          <div className="cardsSection">
            <div className="card">
              <div className="cardBody">
                <figure></figure>
                <h3>Launch a Contest</h3>
                <p>
                  Work with hundreds of creative experts to get custom name
                  suggestions for your business or brand. All names are
                  auto-checked for URL availability.
                </p>
                <a
                  className="cardBody__btn"
                  href="https://www.squadhelp.com/start-contest"
                >
                  Launch a Contest
                </a>
              </div>
            </div>
            <div className="card">
              <div className="cardBody">
                <figure></figure>
                <h3>Explore Names For Sale</h3>
                <p>
                  Our branding team has curated thousands of pre-made names that
                  you can purchase instantly. All names include a matching URL
                  and a complimentary Logo Design
                </p>
                <a
                  className="cardBody__btn"
                  href="https://www.squadhelp.com/premium-domains-for-sale/"
                >
                  Explore Names For Sale
                </a>
              </div>
            </div>
            <div className="card">
              <div className="cardBody">
                <figure></figure>
                <h3>Agency-level Managed Contests</h3>
                <p>
                  Our Managed contests combine the power of crowdsourcing with
                  the rich experience of our branding consultants. Get a
                  complete agency-level experience at a fraction of Agency costs
                </p>

                <a
                  className="cardBody__btn"
                  href="https://www.squadhelp.com/managed-contests"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-0" />
        <div className="featuresSection">
          <div className="featuresSection__title">
            <figure></figure>
            <h2>How Do Naming Contests Work?</h2>
          </div>
          <div className="row">
            <div className="column1">
              <figure></figure>
            </div>
            <div className="column2">
              <ul>
                <li>
                  <div className="liItem">
                    <span>1.</span>
                    <p>
                      Fill out your Naming Brief and begin receiving name ideas
                      in minutes
                    </p>
                  </div>
                </li>
                <li>
                  <div className="liItem">
                    <span>2.</span>
                    <p>
                      Rate the submissions and provide feedback to creatives.
                      Creatives submit even more names based on your feedback.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="liItem">
                    <span>3.</span>
                    <p>
                      Our team helps you test your favorite names with your
                      target audience. We also assist with Trademark screening.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="liItem">
                    <span>4.</span>
                    <p>
                      Pick a Winner. The winner gets paid for their submission.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="faqTopicsSection">
          <div className="row">
            <div id="stickyBlock">
              <nav className="menu">
                <ul>
                  <li>
                    <a href="#contests">Launching A Contest</a>
                  </li>
                  <li>
                    <a href="#marketplace">Buying From Marketplace</a>
                  </li>
                  <li>
                    <a href="#managed">Managed Contests</a>
                  </li>
                  <li>
                    <a href="#creatives">For Creatives</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="column">
              <div id="contests">
                <h3>Launching A Contest</h3>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>
                        How long does it take to start receiving submissions?
                      </button>
                    </h5>
                  </div>
                  <div className="card__body">
                    For Naming contests, you will start receiving your
                    submissions within few minutes of launching your contest.
                    Since our creatives are located across the globe, you can
                    expect to receive submissions 24 X 7 throughout the duration
                    of the brainstorming phase.
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>How long do Naming Contests last?</button>
                    </h5>
                  </div>
                  <div className="card__body">
                    You can choose a duration from 1 day to 7 days. We recommend
                    a duration of 3 Days or 5 Days. This allows for sufficient
                    time for entry submission as well as brainstorming with
                    creatives. If you take advantage of our validation services
                    such as Audience Testing and Trademark Research, both will
                    be an additional 4-7 days (3-5 business days for Audience
                    Testing and 1-2 business days for Trademark Research).
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>Where are the creatives located?</button>
                    </h5>
                  </div>
                  <div className="card__body">
                    About 70% of our Creatives are located in the United States
                    and other English speaking countries (i.e. United Kingdom,
                    Canada, and Australia.). We utilize an advanced rating score
                    algorithm to ensure that high quality creatives receive more
                    opportunities to participate in our contests.
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>What if I do not like any submissions?</button>
                    </h5>
                  </div>
                  <div className="card__body">
                    While it is unusually rare that you will not like any names
                    provided, we have a few options in case this problem occurs:
                    <ul>
                      <li>
                        If the contest ends and you have not yet found a name
                        that you’d like to move forward with, we can provide
                        complimentary extension of your contest as well as a
                        complimentary consultation with one of our branding
                        consultants (a $99 value).
                      </li>

                      <li>
                        By exploring our premium domain marketplace you can
                        apply the contest award towards the purchase of any name
                        listed for sale.
                      </li>
                      <li>
                        If you choose the Gold package or Platinum package and
                        keep the contest as "Not Guaranteed", you can request a
                        partial refund if you choose not to move forward with
                        any name from you project. (Please note that the refund
                        is for the contest award). Here is a link to our
                        <a
                          href="https://helpdesk.squadhelp.com/en/articles/115621-refund-policy"
                          target="_blank"
                        >
                          Refund Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>How much does it cost?</button>
                    </h5>
                  </div>
                  <div className="card__body">
                    Our naming competitions start at $299, and our logo design
                    competitions start at $299. Also, there are three additional
                    contest level that each offer more features and benefits.
                    See our
                    <a href="https://www.squadhelp.com/squadhelp-pricing">
                      Pricing Page
                    </a>
                    for details
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>
                        I need both a Name and a Logo. Do you offer any discount
                        for multiple contests?
                      </button>
                    </h5>
                  </div>
                  <div className="card__body">
                    Yes! We have many contest bundles - our most popular being
                    our Name, Tagline, and Logo bundle. Bundles allow you to
                    purchase multiple contests at one time and save as much as
                    from $75 - $400. You can learn more about our bundle options
                    on our
                    <a href="https://www.squadhelp.com/pricing.php?bundle-id=4">
                      Pricing Page
                    </a>
                    .
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>
                        What if I want to keep my business idea private?
                      </button>
                    </h5>
                  </div>
                  <div className="card__body">
                    You can select a Non Disclosure Agreement (NDA) option at
                    the time of launching your competition. This will ensure
                    that only those contestants who agree to the NDA will be
                    able to read your project brief and participate in the
                    contest. The contest details will be kept private from other
                    users, as well as search engines.
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>Can you serve customers outside the US?</button>
                    </h5>
                  </div>
                  <div className="card__body">
                    Absolutely. Squadhelp services organizations across the
                    globe. Our customer come from many countries, such as the
                    United States, Australia, Canada, Europe, India, and MENA.
                    We’ve helped more than 25,000 customer around the world.
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>Can I see any examples?</button>
                    </h5>
                  </div>
                  <div className="card__body">
                    Our creatives have submitted more than 6 Million names and
                    thousands of logos on our platform. Here are some examples
                    of Names, Taglines, and Logos that were submitted in recent
                    contests.
                    <ul>
                      <li>
                        <a href="https://www.squadhelp.com/Name-Ideas">
                          Name Examples
                        </a>
                      </li>
                      <li>
                        <a href="https://www.squadhelp.com/tagline-slogan-ideas">
                          Tagline Examples
                        </a>
                      </li>
                      <li>
                        <a href="https://www.squadhelp.com/logo-design-examples">
                          Logo Examples
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
              <div id="marketplace">
                <h3>Buying From Marketplace</h3>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>What's included with a Domain Purchase?</button>
                    </h5>
                  </div>
                  <div className="card__body">
                    When you purchase a domain from our premium domain
                    marketplace, you will receive the exact match .com URL, a
                    complimentary logo design (along with all source files), as
                    well as a complimentary Trademark report and Audience
                    Testing if you’re interested in validating your name.
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>
                        How does the Domain transfer process work?
                      </button>
                    </h5>
                  </div>
                  <div className="card__body">
                    Once you purchase a Domain, our transfer specialists will
                    reach out to you (typically on the same business day). In
                    most cases we can transfer the domain to your preferred
                    registrar (such as GoDaddy). Once we confirm the transfer
                    details with you, the transfers are typically initiated to
                    your account within 1 business day.
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>
                        If I purchase a Domain on installments, can I start
                        using it to setup my website?
                      </button>
                    </h5>
                  </div>
                  <div className="card__body">
                    We offer payment plans for many domains in our Marketplace.
                    If you purchase a domain on a payment plan, we hold the
                    domain in an Escrow account until it is fully paid off.
                    However our team can assist you with making any changes to
                    the domains (such as Nameserver changes), so that you can
                    start using the domain right away after making your first
                    installment payment.
                  </div>
                </div>
              </div>
              <hr />
              <div id="managed">
                <h3>Managed Contests</h3>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>What are Managed Contests?</button>
                    </h5>
                  </div>
                  <div className="card__body">
                    The 'Managed' option is a fully managed service by Squadhelp
                    Branding experts. It includes a formal brief preparation by
                    Squadhelp team and management of your contest. Managed
                    Contests are a great fit for companies that are looking for
                    an "Agency" like experience and they do not want to manage
                    the contest directly.
                    <br />
                    Our branding team has directly managed hundreds of branding
                    projects and has learned several best practices that lead to
                    successful project outcomes. Our team will apply all best
                    practices towards the management of your branding project.
                    <br />
                    Learn more about our
                    <a
                      href="https://www.squadhelp.com/managed-contests"
                      target="_blank"
                    >
                      Managed Contest Service
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>
                        What's a typical timeline for a Managed Contest?
                      </button>
                    </h5>
                  </div>
                  <div className="card__body">
                    The overall process takes 12-13 days.
                    <ul>
                      <li>
                        The Managed projects start with a project kick-off call
                        with your Branding Consultant. You can schedule this
                        call online immediately after making your payment.
                      </li>
                      <li>
                        After your kick-off call, the Branding consultant will
                        write your project brief and send for your approval
                        within 1 business day.
                      </li>
                      <li>
                        Upon your approval, the contest will go live. The
                        branding consultant will help manage your project
                        throughout the brainstorming phase (typically 5 days).
                      </li>
                      <li>
                        Upon the completion of brainstorming phase, the branding
                        consultant will work with you to test the top 6 names
                        from your Shortlist (3-5 Days). In addition, the
                        branding consultant will coordinate the detailed
                        Trademark screening (1-3 days)
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>How much do Managed Contests cost?</button>
                    </h5>
                  </div>
                  <div className="card__body">
                    We offer two levels of Managed Contests. Standard ($999) and
                    Enterprise ($1999). The Enterprise managed contest includes:
                    <ul>
                      <li>
                        (1) a $500 award amount (instead of $300), which will
                        attract our top Creatives and provide more options to
                        choose from;
                      </li>
                      <li>
                        (2) we will ensure a senior member of our branding team
                        is assigned to your project and the branding team will
                        invest about 3X more time in the day-to-day management
                        of your project;
                      </li>
                      <li>
                        (3) you will receive more high-end trademark report and
                        5X more responses for your audience test.
                      </li>
                      <li>
                        Here is a link to our
                        <a
                          href="https://www.squadhelp.com/views/contests/create/managed_contests.php"
                          target="_blank"
                        >
                          Pricing page
                        </a>
                        with a detailed comparison of the two packages.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>
                        Where are the Branding Consultants located?
                      </button>
                    </h5>
                  </div>
                  <div className="card__body">
                    All our branding consultants are based in in our
                    Headquarters (Hoffman Estates, IL). Our branding consultants
                    have many years of experience in managing hundreds of
                    branding projects for companies ranging from early stage
                    startups to Fortune 500 corporations.
                  </div>
                </div>
              </div>

              <div id="creatives">
                <h3>For Creatives</h3>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>Can anyone join your platform?</button>
                    </h5>
                  </div>
                  <div className="card__body">
                    We are open to anyone to signup. However, we have an
                    extensive "
                    <a
                      href="https://helpdesk.squadhelp.com/en/articles/91702-percentile-ranking-score"
                      target="_blank"
                    >
                      Quality Scoring
                    </a>
                    " process which ensures that high quality creatives have the
                    ability to continue to participate in the platform. On the
                    other hand, we limit the participation from those creatives
                    who do not consistently receive high ratings.
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>
                        Can I start participating immediately upon signing up?
                      </button>
                    </h5>
                  </div>
                  <div className="card__body">
                    When you initially signup, you are assigned few contests to
                    assess your overall quality of submissions. Based upon the
                    quality of your submissions, you will continue to be
                    assigned additional contests. Once you have received enough
                    high ratings on your submissions, your account will be
                    upgraded to "Full Access", so that you can begin
                    participating in all open contests.
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <h5>
                      <button>How Do I Get Paid?</button>
                    </h5>
                  </div>
                  <div className="card__body">
                    We handle creative payouts via Paypal or Payoneer. Depending
                    upon your country of residence, we may require additional
                    documentation to verify your identity as well as your Tax
                    status.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="stickyBlockEndPoint"></div>
        <hr />
        <div className="ctaSection">
          <figure></figure>
          <h3>Ready to get started?</h3>
          <p>
            Fill out your contest brief and begin receiving custom name
            suggestions within minutes.
          </p>
          <a href="https://www.squadhelp.com/start-contest">Start A Contest</a>
          <figure></figure>
        </div>
        <div className="statsSection">
          <div className="row">
            <div className="row__item">
              <img alt="Image Description" src="/stars.svg" />

              <p>
                <span>4.9 out of 5 stars</span> from 25,000+ customers.
              </p>
            </div>
            <div className="row__item">
              <img alt="Image Description" src="/img21.png" />
              <p>
                Our branding community stands <span>200,000+</span> strong.
              </p>
            </div>
            <div className="row__item">
              <img alt="SVG" src="/sharing-files.svg" />
              <p>
                <span>140+ Industries</span> supported across more than
                <span>85 countries</span>
                <br />– and counting.
              </p>
            </div>
          </div>
        </div>
        <div className="pricingSection">
          <div className="row">
            <div className="row__item">
              <ul>
                <li>
                  <div>
                    <h4>Pay a Fraction of cost vs hiring an agency</h4>
                    <p>
                      For as low as $199, our naming contests and marketplace
                      allow you to get an amazing brand quickly and affordably.
                    </p>
                  </div>
                </li>
                <li className="border"></li>
                <li>
                  <div>
                    <h4>Satisfaction Guarantee</h4>
                    <p>
                      Of course! We have policies in place to ensure that you
                      are satisfied with your experience.
                      <a href="#satisfactionGaurenteedModal">Learn more</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="row__item">
              <ul>
                <li>
                  <div>
                    <h4>Questions?</h4>
                    <p>
                      Speak with a Squadhelp platform expert to learn more and
                      get your questions answered.
                    </p>
                    <button onclick="scheduleConsultationClick()">
                      Schedule Consultation
                    </button>
                    <br />
                    <br />
                    <a href="">
                      <img alt="#" src="/phone_icon.svg" />
                      &nbsp; (877) 355-3585{" "}
                    </a>
                    <br />
                    <span>Call us for assistance</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="satisfactionGaurenteedModal">
          <div className="card">
            <h4>We Stand By Our Process.</h4>
            <p>If you are not satisfied receive</p>
            <ul>
              <li>
                <div className="media">
                  Complimentary extension of your contest timeline.
                </div>
              </li>
              <li>
                <div className="media">
                  Complimentary consultation with a Squadhelp branding
                  consultant.
                </div>
              </li>
              <li>
                <div className="media">
                  Apply your contest award toward the purchase of any premium
                  name from our Marketplace.
                </div>
              </li>
              <li>
                <div className="media">
                  Partial refund for Gold and Platinum packages.
                  <a
                    href="https://helpdesk.squadhelp.com/important-sh-policies/contest-holder/refund-policy"
                    target="_blank"
                  >
                    Read more.
                  </a>
                </div>
              </li>
              <li>
                <div className="media">
                  No-questions-asked refund within 10 days for any marketplace
                  domains purchased.
                  <a
                    href="https://helpdesk.squadhelp.com/domain-marketplace/domain-marketplace-terms-conditions-for-buyers"
                    target="_blank"
                  >
                    Read more.
                  </a>
                </div>
              </li>
            </ul>

            <div className="card-footer">
              <button
                type="button"
                className="btn btn-sm btn-soft-secondary transition-3d-hover"
                onclick="Custombox.modal.close();"
              >
                Close
              </button>
            </div>
          </div>
        </div>
        <div className="clientsSection">
          <div className="row">
            <h6>Featured In</h6>
            <a
              href="http://www.forbes.com/sites/forbestreptalks/2016/07/11/not-sure-how-to-name-a-startup-squadhelp-will-crowdsource-it-for-199"
              target="_blank"
            >
              <img alt="forbes" src="/forbes.svg" />
            </a>
            <a
              href="http://thenextweb.com/contributors/crowdsource-startup-name-with-squadhelp/"
              target="_blank"
            >
              <img alt="TNW" src="/TNW.svg" />
            </a>
            <a
              href="http://www.chicagotribune.com/bluesky/originals/ct-squadhelp-startup-names-bsi-20170331-story.html"
              target="_blank"
            >
              <img alt="chicago" src="/chicago.svg" />
            </a>
            <a
              href="http://mashable.com/2011/04/01/make-money-crowdworking/"
              target="_blank"
            >
              <img alt="Mashable" src="/Mashable.svg" />
            </a>
          </div>
        </div>
      </main>
      <footer>
        <div className="footerTop">
          <div className="row">
            <div className="column">
              <h4>Squadhelp</h4>
              <ul>
                <li>
                  <a href="https://www.squadhelp.com/AboutUs">About</a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/ContactUs">Contact</a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/how-it-works">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/testimonials-feedback">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Name-Ideas">Our Work</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="https://www.squadhelp.com/branding-marketing-naming-contests#contest_type_filter=1">
                    Naming
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/logos">Logo Design</a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/taglines">Taglines</a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/premium-domains-for-sale/all">
                    Premium Names For Sale
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/premium-domains-for-sale/all/?bl=1">
                    Creative Owned Names For Sale
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/brand-name-testing">
                    Audience Testing
                  </a>
                </li>
                <li>
                  <a href="https://helpdesk.squadhelp.com/squadhelp-services/trademark-filing-package">
                    Trademark Research &amp; Filing
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/managed-contests">
                    Managed Agency Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="https://www.squadhelp.com/how-it-works">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/join-as-creative">
                    Become a Creative
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/business-name-generator">
                    Business Name Generator
                  </a>
                </li>
                <li>
                  <a href="https://discussion.squadhelp.com/">
                    Discussion Forum
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/blog">Blog</a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/how-to-name-your-business">
                    Download eBook
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/squadhelp-pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="https://helpdesk.squadhelp.com/">Help &amp; FAQs</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4>Important Guidelines</h4>
              <ul>
                <li>
                  <a href="https://www.squadhelp.com/tips-for-contest-holders">
                    Tips For Contest Holders
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/tips-for-creatives">
                    Tips For Contestants
                  </a>
                </li>
              </ul>
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="https://www.squadhelp.com/Terms&amp;Conditions">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/cookie-policy">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <h4>Featured Categories</h4>
            <div className="border"></div>
            <div className="column">
              <ul>
                <li>
                  <a href="https://www.squadhelp.com/Aerospace-Company-business-names">
                    Aerospace
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/consulting-company-name-ideas">
                    Agency &amp; Consulting
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Agriculture-Company-business-names">
                    Agriculture Company
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/analytics-platform-firm-names">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/automobile-business-name-ideas">
                    Automotive
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Bars-business-names">
                    Bar &amp; Brewery
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/beauty-business-name-ideas">
                    Beauty &amp; Cosmetics
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Beer-WineSpirits-business-names">
                    Beer, Wine &amp; Spirits
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/bike-rental-brand-business-names">
                    Bikes Brand
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/biotech-company-name-suggestions">
                    Biotech
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Bot-AI-name-ideas">
                    Bots &amp; AI
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/cannabis-dispensary-name-ideas">
                    Cannabis &amp; CBD
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Caterers-business-names">
                    Catering
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/cleaning-company-service-name-ideas">
                    Cleaning
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/co-working-space-name-ideas">
                    Co-Working Space Names
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Coffee-Tea-brand">
                    Coffee &amp; Tea
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Community-Organization-business-names">
                    Community Organization
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/construction-company-name-ideas">
                    Construction &amp; Architecture
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Crowdfunding-business-names">
                    Crowdfunding
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/crypto-currency-business-name-ideas">
                    Cryptocurrency, Blockchain
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/dating-website-name-ideas">
                    Dating &amp; Relationship
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Child-CareDay-Care-business-names">
                    Daycare
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Dentists-business-names">
                    Dental
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>
                  <a href="https://www.squadhelp.com/drone-brand-business-names">
                    Drone
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/shopping-website-name-ideas">
                    E-Commerce &amp; Retail
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/education-business-name-generator">
                    Education &amp; Training
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/entertainment-business-name-ideas">
                    Entertainment &amp; Arts
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/event-planning-business-name-ideas">
                    Event Planning &amp; Services
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Event-business-names">
                    Events &amp; Conferences
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/clothing-brand-name-ideas">
                    Fashion &amp; Clothing
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/finance-business-name-ideas">
                    Finance
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/fintech-startup-name-ideas">
                    Fintech (Finance Technology)
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/fitness-business-name-ideas">
                    Fitness &amp; Gym
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/food-brand-name-ideas">
                    Food &amp; Drink
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Food-deliver-meal-kit-Name-Ideas">
                    Food Delivery &amp; Meal Kits
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Food-Trucks-business-names">
                    Food Truck
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Footwear-business-names">
                    Footwear
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/furniture-business-name-ideas">
                    Furniture &amp; Home Furnishings
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/cool-names-for-games">
                    Games &amp; Recreational
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/gaming-business-names">
                    Gaming
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Organic-business-names">
                    Green &amp; Organic
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/health-business-name-ideas">
                    Health &amp; Wellness
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/home-cleaning-services-business-names">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/home-garden-business-names">
                    Home &amp; Garden
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/insurance-business-name-ideas">
                    Insurance
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Interior-Design-business-names">
                    Interior Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>
                  <a href="https://www.squadhelp.com/iot-business-names-business-names">
                    Internet of Things (IOT)
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/jewelry-store-names-ideas">
                    Jewelry
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/kids-brand-name-ideas">
                    Kids &amp; Baby
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Landscaping-business-names">
                    Landscaping
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Law-Firm-Name-Ideas">
                    Legal, Attorney, Law
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/life-coaching-business-name-ideas">
                    Life Coach, Motivational
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/location-Specific-GEO">
                    Location Specific / GEO
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/manufacturing-company-name-ideas">
                    Manufacturing &amp; Industrial
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/marketing-business-name-ideas">
                    Marketing &amp; Advertising
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Medical-business-names">
                    Medical &amp; Dental
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/mobile-app-name-deas">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Mortgage-Brokers-business-names">
                    Mortgage
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/movie-name-generator">
                    Movies &amp; TV
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/music-app-name-ideas">
                    Music &amp; Audio
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Mass-Medibusiness">
                    News &amp; Media
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/non-profit-organization-name-ideas">
                    Non-Profit &amp; Community
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Office-Supplies-business-names">
                    Office &amp; Business Supplies
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/oil-gas-business-names-business-names">
                    Oil and Gas
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/outdoor-adventure-brand-name-ideas">
                    Outdoor &amp; Adventure
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/payment-processing-name-ideas">
                    Payment
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Payroll-Services-business-names">
                    Payroll
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/pet-business-name-ideas">
                    Pets
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Pharmaceuticals-business-names">
                    Pharma
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>
                  <a href="https://www.squadhelp.com/Photography-business-names">
                    Photography
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/podcast-name-ideas">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Government-Organization-business-names">
                    Politics/Government
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Professional-Services-business-names">
                    Professional Services
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Property-Management-business-names">
                    Property Management
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/real-estate-business-names-ideas">
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/StaffingRecruitment-business-names">
                    Recruitment &amp; Staffing
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/fast-food-restaurant-names-ideas">
                    Restaurants
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/sales-marketing-business-names">
                    Sales &amp; Marketing
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/ScienceEngineering-business-names">
                    Science &amp; Engineering
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Security-Systems-business-names">
                    Security
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/senior-living-Care-business-names">
                    Senior Living and Care
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/social-media-company-name-ideas">
                    Social &amp; Networking
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Solar-energy-business-names">
                    Solar Power and Green Energy
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Other-business-name-ideas">
                    Something Else
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/spa-name-ideas">
                    Spas &amp; Salons
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/sports-team-name-generator">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/startup-incubator-name-ideas">
                    Startup Incubator
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Self-Storage-business-names">
                    Storage
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/tech-startup-name-ideas">
                    Tech, Internet, Software
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/transportation-company-name-ideas">
                    Transportation
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/hotel-name-generator">
                    Travel &amp; Hotel
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Tutoring-Test-prep-business-names">
                    Tutoring &amp; Test Prep
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>
                  <a href="https://www.squadhelp.com/venture-capital-fund-name-ideas">
                    Venture Capital &amp; Investment
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/book-title-ideas">
                    Video, Books &amp; Magazines
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/virtual-reality-business-names">
                    Virtual Reality (VR) and Augmented Reality (AR) Company
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/supplement-brand-name-ideas">
                    Vitamins and Supplements
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Graphic-Design-business-names">
                    Website &amp; Graphic Design
                  </a>
                </li>
                <li>
                  <a href="https://www.squadhelp.com/Wedding-Planning-business-names">
                    Weddings &amp; Bridal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="column">
            <a href="https://www.squadhelp.com/">
              <img alt="#" src="/resources/assets/imgs/footer-logo.png" />
            </a>

            <a href="https://www.shopperapproved.com/reviews/squadhelp.com/">
              <span>Squadhelp.com</span>
              has a Shopper Approved rating of
              <span itemprop="ratingValue">4.9</span>/
              <span itemprop="bestRating">5</span>
              based on <span itemprop="ratingCount">2780</span> ratings and
              reviews
            </a>
          </div>
        </div>
        <div className="column">
          <p>Copyright © 2020 Squadhelp Inc</p>

          <ul>
            <li>
              <a
                href="https://www.facebook.com/squadhelpinc"
                target="_blank"
              ></a>
            </li>
            <li>
              <a href="https://twitter.com/squadhelp" target="_blank"></a>
            </li>
          </ul>
        </div>
      </footer>
      <a className="goToTop" href="#"></a>
    </>
  );
};

export default HowItWorksPage;
