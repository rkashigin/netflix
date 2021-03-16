import React from "react";
import { render } from "@testing-library/react";
import { Profiles } from "../../components";

describe("<Profiles />", () => {
  it("renders the <Profiles /> with populated data", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture
              src="/images/roman.png"
              data-testid="profile-picture"
            />
            <Profiles.Name>Roman Kashigin</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture")).toBeTruthy();
    expect(getByText("Roman Kashigin")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Profiles /> with populated data but misc image", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture data-testid="profile-picture-misc" />
            <Profiles.Name>Roman Kashigin</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture-misc")).toBeTruthy();
    expect(getByText("Roman Kashigin")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
