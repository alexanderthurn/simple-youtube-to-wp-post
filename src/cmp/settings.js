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


          {(!settings.options.yttpYoutubeApiKey || !settings.options.yttpYoutubeChannelId) && 
          <div class="wrap">
            In order to use this plugin, you just need to configure your <b>youtube-channel-id</b> and your <b>youtube-api-key</b>. I will help you to set it up:
            <ul>
              <li>You can find your channel-id <a href='https://www.youtube.com/account_advanced'>here</a>
              </li>
              <li>You need an api key from youtube/google. It is free and can be created in the google search console. Three steps are needed 
              <ol>
                <li>Create a project or use an existing one within the <a href="https://console.cloud.google.com/welcome">google cloud console</a></li>
                <li>Enable the <a href='https://console.cloud.google.com/apis/library/youtube.googleapis.com'>YouTube Data API v3</a></li>
                <li>Create a Youtube API key <a href="https://console.cloud.google.com/apis/credentials">here</a></li>
              </ol>
              </li>
                </ul>
          </div> }

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
              <a href='https://www.youtube.com/account_advanced'>Channel-Id on Youtube</a>
              </CardFooter>
            </Card>
            </div>

            <div class="wrap">
            <Card>
              <CardHeader>Youtube Data v3 API Key</CardHeader>
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
                  Google Search Console
                </a>
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
          <div class="wrap">
          <p>Hint: This plugin is 100% free and open source. You can check and modify the sourcecode on <a href="https://github.com/alexanderthurn/youtube-to-post-wordpress-plugin">Github</a>. Author: <a href="mailto:athurn@gmx.de">Alexander Thurn</a></p>
          </div>
    </div>
  );
})

export default YoutubeToPostAdminPageSettings;
