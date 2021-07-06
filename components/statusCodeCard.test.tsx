import React from "react";
import { render, screen } from "@testing-library/react";

import StatusCodeCard from "./statusCodeCard";

describe("StatusCodeCard", () => {
    let container: any;

    const code = "code";
    const title = "title";
    const description = "description";

    beforeEach(() => {
        container = render(
            <StatusCodeCard
                code={code}
                title={title}
                description={description}
            />
        ).container;
    });

    it("should render image with link to passed code gif and description as the image alternative", () => {
        const [img]: any = container.getElementsByTagName("img");

        expect(img.alt).toBe(description);
        expect(img.src).toContain(`/images/${code}.gif`);
    });

    it("should render link tag with link to statuses come with passed code and description contains code and tittle", () => {
        const [link]: any = container.getElementsByTagName("a");

        expect(link.href).toBe(`https://httpstatuses.com/${code}`);
        expect(link.text).toBe(`${code}: ${title} ↗`);
    });
});
