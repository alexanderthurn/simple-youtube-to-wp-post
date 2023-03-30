import { withNotices, Button, Spinner, Flex, FlexBlock, FlexItem, Text, TextControl, Card, CardHeader, CardBody, CardFooter } from '@wordpress/components';
import { useState, useEffect } from 'react';

const YoutubeToPostAdminPageSettings = withNotices( ({ noticeOperations, noticeUI, settings }) => {
  console.log('rendering settings', settings);

  const [youtubeApiKey, setYoutubeApiKey] = useState(settings.options.yttpYoutubeApiKey)
  const [youtubeChannelId, setYoutubeChannelId] = useState(settings.options.yttpYoutubeChannelId)

  useEffect(() => {
    
  }, []);

  console.log('rendering settings');



  function saveSettings() {
    const data = new FormData();
    data.append('action', 'yttp_options');
    data.append('nonce', settings.nonce);
    data.append('yttpYoutubeApiKey', youtubeApiKey);
    data.append('yttpYoutubeChannelId', youtubeChannelId);

    const paramsAsQueryString = new URLSearchParams(data);
    noticeOperations.removeAllNotices()
    noticeOperations.createNotice( { status: 'success', content: 'Saving' } );


    fetch(settings.ajaxUrl + '?' + paramsAsQueryString, {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('updateSettings', result);
        //alert('Saved')
        noticeOperations.removeAllNotices()
        noticeOperations.createNotice( { status: 'success', content: 'Settings saved' } );
      });

  }

  return (
    <div class='wrap'>
          <h1>Youtube To Post Settings</h1>
          {noticeUI}
          <div class="wrap">
            <Card>
              <CardHeader>Youtube API Key</CardHeader>
              <CardBody>
                <TextControl
                  type='password'
                  value={youtubeApiKey}
                  onChange={(v) => {
                    setYoutubeApiKey(v);
                  }}
                  placeholder='AIza...........nqCQ'
                />
              </CardBody>
              <CardFooter>
                <a href='https://console.cloud.google.com/apis/library/youtube.googleapis.com'>
                  You need an api key from youtube/google. It is free and can be
                  created in the google search console
                </a>
              </CardFooter>
            </Card>
            </div>

              <div class="wrap">
            <Card>
              <CardHeader>Youtube Channel ID</CardHeader>
              <CardBody>
                  <TextControl
                  type='text'
                  value={youtubeChannelId}
                  onChange={(v) => {
                    setYoutubeChannelId(v);
                  }}
                  placeholder='UCzN_yRlMz4pyW-LJZJrxTRw'
                />
              </CardBody>
              <CardFooter>
              <a href='https://www.youtube.com/account_advanced'> You can find your channel-id here</a>
              </CardFooter>
            </Card>
            </div>
           <div class="wrap">
            <Button
              className='button button-primary'
              onClick={() => saveSettings()}
            >
              Save Changes
            </Button>
          </div>
    </div>
  );
})

export default YoutubeToPostAdminPageSettings;
