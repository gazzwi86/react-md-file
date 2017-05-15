import React from 'react';
import { mount } from 'enzyme';
import Component from './react-md-component.jsx';

describe('<ReactMd />', () => {
  const file = '../example/README.md';
  let mountedComp = mount(<Component fileName={file} nested={false} />);

  beforeEach(done => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      text: () => Promise.resolve(`# Example
Hello world`)
    }));

    mountedComp.fetchFile = mountedComp.setState({ md: `# Example
Hello world`});

    done();
  });

  it('fetchFile should update state with file', () => {
    let component = new Component({fileName: '', nested: false});
    component.fetchFile(file).then(res => {
      expect(res).toBe(`# Example
Hello world`);
    });
  });

  it('should output the file with a top level h1', () => {
    expect(mountedComp.html()).toContain('<h1');
  });

  it('should output the file with a top level h2', () => {
    mountedComp.setProps({ fileName: file, nested: true });
    expect(mountedComp.html()).toContain('<h2');
  });
});
