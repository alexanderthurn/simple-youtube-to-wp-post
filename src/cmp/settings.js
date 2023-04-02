import { withNotices, Button, TextareaControl, TextControl, Card, CardHeader, CardBody, CardFooter, CardDivider} from '@wordpress/components';
import { useState, useEffect } from 'react';

const YoutubeToPostAdminPageSettings = withNotices( ({ noticeOperations, noticeUI, settings }) => {
  console.log('rendering settings', settings);

  const [youtubeApiKey, setYoutubeApiKey] = useState(settings.options.yttpYoutubeApiKey)
  const [youtubeChannelId, setYoutubeChannelId] = useState(settings.options.yttpYoutubeChannelId)
  const [postRegex, setPostRegex] = useState(settings.options.yttpPostRegex)
  const [postTemplate, setPostTemplate] = useState(settings.options.yttpPostTemplate)

  useEffect(() => {
    
  }, []);

  console.log('rendering settings');

  function saveSettings() {
    const data = new FormData();
    data.append('action', 'yttp_options');
    data.append('nonce', settings.nonce);
    data.append('yttpYoutubeApiKey', youtubeApiKey);
    data.append('yttpYoutubeChannelId', youtubeChannelId);
    data.append('yttpPostRegex', postRegex);
    data.append('yttpPostTemplate', postTemplate);

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

  console.log('postSettings', postRegex, postTemplate)

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
            <Button
              className='button button-primary'
              onClick={() => saveSettings()}
            >
              Save Changes
            </Button>
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
            <Card>
              <CardHeader>Advanced Post-Settings (optional)</CardHeader>
              <CardBody>
              <TextareaControl
                label="Filter your video-description by a regex expression. You can use the found regex groups in the inline-template below"
                  type='text'
                  value={postRegex}
                  onChange={(v) => {
                    setPostRegex(v)
                  }}
                  placeholder='/(.*)about this channel/misu would take all text of the video description from top to "about this channel". misu is for matching multiline and more'
                />

               <TextareaControl
                label="HTML/Gutenberg Inline-Template using the regex groups from above. The first group can be accessed by __GROUP[0]__. The ID of the video is __VIDEO_ID__"
                  type='text'
                  value={postTemplate}
                  onChange={(v) => {
                    setPostTemplate(v)
                  }}
                  placeholder='<h1>Good for you</h1>__GROUP[0]__  would result in a h1 headline, followed by the content of the first group'
                />

              </CardBody>
              <CardFooter>
              <a href="https://regex101.com/">If you do not know how regex expressions work, give this a try: Regex101</a>
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
          {noticeUI}
          </div>
          <div class="wrap">
          <p>Hint: This plugin is 100% free and open source. You can check and modify the sourcecode on <a href="https://github.com/alexanderthurn/youtube-to-post-wordpress-plugin">Github</a>. Author: <a href="mailto:athurn@gmx.de">Alexander Thurn</a></p>
          </div>
    </div>
  );
})

export default YoutubeToPostAdminPageSettings;
