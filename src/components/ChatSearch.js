import React from "react";
function ChatSearch() {
  return (
    <>
      <div className="search-new-chat d-flex    align-items-center">
        <div className="inner">
          <div className="search-icon">
            <span data-testid="search" data-icon="search">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <span className="text-search">Search or start new chat </span>
      </div>
    </>
  );
}

export default ChatSearch;
