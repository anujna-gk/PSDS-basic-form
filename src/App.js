import React, { useState } from 'react';
import './index.css'
import TextArea from '@pluralsight/ps-design-system-textarea';
import Button from '@pluralsight/ps-design-system-button';
import Badge from '@pluralsight/ps-design-system-badge';
import Checkbox from '@pluralsight/ps-design-system-checkbox';
import Radio from '@pluralsight/ps-design-system-radio';
import Banner from '@pluralsight/ps-design-system-banner';
import Link from '@pluralsight/ps-design-system-link';
import { CheckCircleFilledIcon } from '@pluralsight/ps-design-system-icon'

export const Psds = () => {

  const [values, setValues] = useState([]);

  function checked(name) {
    return values.includes(name);
  }

  function handleCheck(evt, checked, value, name) {
    setValues(prev => {
      if (checked) {
        return [...prev, name];
      }
      return prev.filter(checkedItem => checkedItem !== name);
    });
  }

  return (
    <div className="form-container" style={{ backgroundColor: "rgb(210, 202, 249)", padding: "41px" }}>
      <Banner style={{
        width: "600px"
      }} color={Banner.colors.blue}>Completion of all details is necessary for the successful processing of your application</Banner>
      <Badge color={Badge.colors.red}>CONFIDENTIAL</Badge>
      <h3>Give a short description on why you are most suitable for this job role?</h3>
      <div>
        <TextArea label="Description" />
      </div>
      <Button appearance={Button.appearances.primary}>Submit answer</Button>
      <div className="checkbox">
        <h3>Select all the skills below you have experience in :</h3>
        <Checkbox
          onChange={handleCheck}
          name="sub1"
          value="yes"
          checked={checked('sub1')}
          label="React" />
        <Checkbox
          onChange={handleCheck}
          name="sub2"
          value="of-course"
          label="Javascript"
          checked={checked('sub2')} />
        <Checkbox
          onChange={handleCheck}
          name="sub3"
          value="who-doesnt"
          label="Python"
          checked={checked('sub3')} />
      </div>
      <div className="radio-group">
        <h3>What is your proficiency in ReactJS?</h3>
        <Radio.Group name="courseLevel">
          <Radio.Button value="beginner" label="Beginner" />
          <Radio.Button value="intermediate" label="Intermediate" />
          <Radio.Button value="advanced" label="Advanced" />
        </Radio.Group>
      </div>
      <div className="privacy-policy">
        <Checkbox
          onChange={handleCheck}
          name="privacy"
          value="yes"
          label={
            <h3>
              I have read and accept the{' '}
              <Link>
                <a href="https://duckduckgo.com">Information and Privacy policy</a>
              </Link>
            </h3>}
          checked={checked('privacy')} />
      </div >
      <div className="submit">
        <Button appearance={Button.appearances.primary}>Submit form <CheckCircleFilledIcon /> </Button>
      </div>
    </div>
  );
}
