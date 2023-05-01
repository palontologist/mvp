import { NextPage } from 'next';
import {ClerkProvider,SignedIn,SignedOut,SignInButton,UserButton} from "@clerk/nextjs";

export function DiscoverPage() {
  return (
    <div>
      <button onClick={loadTypeform}>
        Discover Your Sustainable Development Goals
      </button>
      <div id="typeform-widget"></div>
    </div>
  );

  function loadTypeform() {
    const widget = document.createElement('div');
    widget.setAttribute('data-tf-widget', 'lppLNFPH');
    widget.setAttribute('data-tf-opacity', '100');
    widget.setAttribute('data-tf-iframe-props', 'title=frontforumfocus');
    widget.setAttribute('data-tf-transitive-search-params', '');
    widget.setAttribute('data-tf-medium', 'snippet');
    widget.style.width = '100%';
    widget.style.height = '500px';

    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.onload = () => {
      widget.style.visibility = 'visible';
    };

    const typeformWidget = document.getElementById('typeform-widget');
    if (typeformWidget) {
      typeformWidget.appendChild(widget);
      typeformWidget.appendChild(script);
    }
  }
}
